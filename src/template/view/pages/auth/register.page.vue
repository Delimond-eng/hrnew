<template>
    <div class="content content-fixed content-auth">
        <div class="container">
            <div class="media align-items-stretch justify-content-center ht-100p">
                <div class="sign-wrapper mg-lg-r-50 mg-xl-r-60">
                    <div class="pd-t-20 wd-100p">
                        <h4 class="tx-color-01 mg-b-5">Création nouvelle société</h4>
                        <p class="tx-color-03 tx-16 mg-b-40">Veuillez renseigner tous les champs pour créer une nouvelle
                            société ! </p>
                        <div class="form-group">
                            <label>Dénomination sociale</label>
                            <input type="text" class="form-control"
                                placeholder="Saisir la dénomination sociale de la société...">
                        </div>

                        <div class="form-group">
                            <label>Identification nationale</label>
                            <input type="text" class="form-control" placeholder="Saisir l'idnat de la société...">
                        </div>

                        <div class="form-group">
                            <label>Affiliation CNSS</label>
                            <input type="text" class="form-control" placeholder="Saisir l'affiliation CNSS...">
                        </div>

                        <div class="form-group">
                            <label>Libellé</label>
                            <input type="text" class="form-control" placeholder="Saisir le libellé de la société...">
                        </div>

                        <div class="form-group">
                            <label>Adresse</label>
                            <input type="text" class="form-control" placeholder="Saisir l'adresse de la société...">
                        </div>

                        <div class="form-group">
                            <label>Gérant, Nom complet </label>
                            <input type="text" class="form-control"
                                placeholder="Saisir le nom complet du gérant de la société...">
                        </div>

                        <div class="form-group">
                            <label>Téléphone </label>
                            <input type="text" class="form-control" placeholder="Saisir le n° de téléphone...">
                        </div>

                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" class="form-control" placeholder="Saisir l'adresse email...">
                        </div>

                        <div class="form-group">
                            <label>Mot de passe</label>
                            <input type="password" class="form-control" placeholder="Entrer le mot de passe...">
                        </div>

                        <div class="form-group">
                            <label>Confirmation mot de passe</label>
                            <input type="password" class="form-control" placeholder="Retaper le mot de passe ...">
                        </div>

                        <button class="btn btn-success w-100">Créer société</button>
                        <div class="divider-text">ou</div>
                        <div class="d-grid gap-2">
                            <button class="btn btn-brand-02 btn-block" @click.prevent="$router.go(-1)">Se connecter</button>
                        </div>

                    </div>
                </div><!-- sign-wrapper -->
                <div class="media-body pd-y-30 pd-lg-x-50 pd-xl-x-60 align-items-center d-none d-lg-flex pos-relative">
                    <div class="mx-lg-wd-500 mx-xl-wd-550 pos-absolute t-40">

                        <h1 class="aside-logo tx-100" style="color: #000000;">Millenium<span>
                                payroll</span></h1>
                    </div>
                    <div class="pos-absolute b-0 r-0 tx-12">
                        Bienvenue sur la plateforme <a href="#" class="aside-logo tx-12"
                            style="color: #000000;">Millenium<span>
                                payroll</span></a>
                    </div>
                </div><!-- media-body -->
            </div><!-- media -->
        </div><!-- container -->
    </div>
</template>


<script>
export default {
    name: 'RegisterPage'
}
</script>