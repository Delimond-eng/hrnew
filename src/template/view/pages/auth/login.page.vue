<template>
    <div class="content content-fixed content-auth">
        <div class="container">
            <div class="media align-items-stretch justify-content-center ht-100p pos-relative">
                <div class="media-body align-items-center d-none d-lg-flex">
                    <div class="mx-wd-600">
                        <h1 class="aside-logo tx-100" style="color: #000000;">Millenium<span>
                                payroll</span></h1>
                    </div>
                    <div class="pos-absolute b-0 l-0 tx-12 tx-center">
                        Bienvenue sur la plateforme <a href="#" class="aside-logo tx-12"
                            style="color: #000000;">Millenium<span>
                                payroll</span></a>
                    </div>
                </div><!-- media-body -->
                <div class="sign-wrapper mg-lg-l-50 mg-xl-l-60">
                    <div class="wd-100p">
                        <h3 class="tx-color-01 mg-b-5">Authentification</h3>
                        <div class="form-group">
                            <label>Identifiant</label>
                            <input type="email" class="form-control" placeholder="exemple@domain.com">
                        </div>
                        <div class="form-group">
                            <div class="d-flex justify-content-between mg-b-5">
                                <label class="mg-b-0-f">Mot de passe</label>
                            </div>
                            <input type="password" class="form-control" placeholder="Entrer le mot de passe...">
                        </div>
                        <button class="btn btn-brand-02 w-100"
                            @click.prevent="$router.replace({ name: 'secure-home' })">Connecter</button>
                        <div class="divider-text"></div>
                        <div class="d-grid gap-2">
                            <button class="btn btn-success btn-block"
                                @click.prevent="$router.push({ name: 'register' })">Créer
                                société</button>
                        </div>
                    </div>
                </div><!-- sign-wrapper -->
            </div><!-- media -->
        </div><!-- container -->
    </div>
</template>

<script>
export default {
    name: 'AuthLogin',
}
</script>
<style scoped src="@/assets/css/dashforge.auth.css" ></style>