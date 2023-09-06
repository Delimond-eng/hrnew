<template>
    <div class="content content-fixed content-auth">
        <div class="container">
            <div class="media align-items-stretch justify-content-center ht-100p">
                <div class="sign-wrapper mg-lg-r-50 mg-xl-r-60">
                    <div  class="df-example wd-100p">
                        <form @submit.prevent="requestSubmit">
                            <p class="tx-12 tx-danger">Veuillez renseigner tous les champs pour créer
                                une nouvelle
                                société ! </p>
                            <div class="form-group">
                                <label class="form-label">Dénomination sociale <span class="tx-danger">*</span></label>
                                <input type="text" class="form-control"
                                    placeholder="Saisir la dénomination sociale de la société..." required>
                            </div>

                            <div class="form-group">
                                <label class="form-label">Identification nationale <span class="tx-danger">*</span></label>
                                <input type="text" class="form-control" placeholder="Saisir l'idnat de la société..."
                                    required>
                            </div>

                            <div class="form-group">
                                <label class="form-label">Affiliation CNSS <span class="tx-danger">*</span></label>
                                <input type="text" class="form-control" placeholder="Saisir l'affiliation CNSS..." required>
                            </div>

                            <div class="form-group">
                                <label class="form-label">Libellé <span class="tx-danger">*</span></label>
                                <input type="text" class="form-control" placeholder="Saisir le libellé de la société..."
                                    required>
                            </div>

                            <div class="form-group">
                                <label class="form-label">Adresse <span class="tx-danger">*</span></label>
                                <input type="text" class="form-control" placeholder="Saisir l'adresse de la société..."
                                    required>
                            </div>

                            <div class="form-group">
                                <label class="form-label">Gérant, Nom complet <span class="tx-danger">*</span></label>
                                <input type="text" class="form-control"
                                    placeholder="Saisir le nom complet du gérant de la société..." required>
                            </div>

                            <div class="form-group">
                                <label class="form-label">Téléphone <span class="tx-danger">*</span></label>
                                <input type="text" class="form-control" placeholder="Saisir le n° de téléphone..." required>
                            </div>

                            <div class="form-group">
                                <label class="form-label">Email <span class="tx-danger">*</span></label>
                                <input type="email" class="form-control"
                                    placeholder="Saisir l'adresse email... ex: exemple@domain" required>
                            </div>

                            <div class="form-group">
                                <label class="form-label">Mot de passe <span class="tx-danger">*</span></label>
                                <input type="password" class="form-control" placeholder="Entrer le mot de passe..."
                                    required>
                            </div>

                            <div class="form-group">
                                <label class="form-label">Confirmation mot de passe <span class="tx-danger">*</span></label>
                                <input type="password" class="form-control" placeholder="Retaper le mot de passe ..."
                                    required>
                            </div>

                            <bs-button class="btn-success w-100" btn-type="submit" :loading="requestLoading">Créer
                                société</bs-button>
                            <div class="divider-text">ou</div>
                            <div class="d-grid gap-2">
                                <button class="btn btn-brand-02 btn-block" @click.prevent="$router.go(-1)">Se
                                    connecter</button>
                            </div>

                        </form>
                    </div>

                </div><!-- sign-wrapper -->
                <div class="media-body pd-y-30 pd-lg-x-50 pd-xl-x-60 align-items-center d-none d-lg-flex pos-relative">
                    <div class="mx-lg-wd-500 mx-xl-wd-550 pos-absolute t-10">

                        <h1 class="aside-logo tx-80" style="color: #000000;">Millenium<span>
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
    name: 'RegisterPage',

    data() {
        return {
            requestLoading: false
        }
    },


    methods: {
        requestSubmit(e) {
            this.requestLoading = true;
            setTimeout(() => {
                this.requestLoading = false;
                this.$router.replace({ name: 'secure-home' });
            })
        }
    },
}
</script>