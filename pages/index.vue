<template>
    <div class="w-full min-h-screen xs:h-full flex justify-center items-center login">
        <div v-if="authStore.isLogin" class="flex flex-wrap justify-center text-center w-full max-w-[1024px] p-5">
            <img src="~/assets/images/logo-dark.png" class="img-fluid img-dark" alt="Logo" />
            <img src="~/assets/images/logo-light.png" class="img-fluid img-light" alt="Logo" />
            <h1>Aguarde...</h1>
        </div>
        <div v-else class="w-96 min-w-full flex flex-col justify-center items-center px-4">
            <h1 class="text-6xl xs:text-8xl">
                <img src="~/assets/images/logo-dark.png" class="img-fluid img-dark" alt="Logo" />
                <img src="~/assets/images/logo-light.png" class="img-fluid img-light" alt="Logo" />
            </h1>

            <form class="mt-10" @submit.prevent="login">
                <input
                    v-model="formUsername"
                    type="text"
                    :placeholder="$t('input.username')"
                    class="input input-bordered w-full"
                    required
                />

                <input
                    v-model="formPassword"
                    type="password"
                    :placeholder="$t('input.password')"
                    class="input input-bordered w-full mt-5"
                    required
                />

                <button type="submit" class="btn btn-primary w-100">
                    {{ $t('button.login') }}
                </button>

                <div
                    v-if="showLoginError"
                    role="alert"
                    class="alert alert-error w-auto rounded z-2 h-12 p-[0.7rem]"
                >
                    <SvgIcon name="error" />
                    <span>{{ formError }}</span>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const { locale, locales, t } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()

const authStore = useAuth()
const configStore = useConfig()
const indexStore = useIndex()

const selectedLang = ref(locale)
const formError = ref('')
const showLoginError = ref(false)
const formUsername = ref('')
const formPassword = ref('')

authStore.inspectToken()

async function login() {
    try {
        const status = await authStore.obtainToken(formUsername.value, formPassword.value)

        formUsername.value = ''
        formPassword.value = ''
        formError.value = ''

        if (status === 401 || status === 400 || status === 403) {
            formError.value = t('alert.wrongLogin')
            showLoginError.value = true

            setTimeout(() => {
                showLoginError.value = false
            }, 3000)
        }

        await configStore.nuxtClientInit()
        return navigateTo(localePath({ name: 'player' }))
    } catch (e) {
        formError.value = e as string
    }
}

function toggleDarkTheme() {
    indexStore.darkMode = !indexStore.darkMode

    if (indexStore.darkMode) {
        colorMode.preference = 'dark'
    } else {
        colorMode.preference = 'light'
    }
}

async function logout() {
    try {
        authStore.removeToken()
    } catch (e) {
        formError.value = e as string
    }
}

async function changeLang(code: string) {
    const path = switchLocalePath(code)
    const cookie = useCookie('i18n_redirected')
    cookie.value = code

    router.push(path)
}
</script>
