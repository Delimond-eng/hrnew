<template>
    <div class="content content-fixed content-auth">
        <div class="container">
            <div class="media align-items-stretch justify-content-center ht-100p pos-relative">
                <div class="media-body align-items-center d-none d-lg-flex">
                    <div class="mx-wd-600">
                        <h1 class="aside-logo tx-80" style="color: #000000;">Millenium<span>
                                payroll <small>2023</small></span></h1>
                    </div>
                    <div class="pos-absolute b-0 l-0 tx-12 tx-center">
                        Bienvenue sur la plateforme <a href="#" class="aside-logo tx-12"
                            style="color: #000000;">Millenium<span>
                                payroll</span></a>
                    </div>
                </div><!-- media-body -->
                <div class="sign-wrapper mg-lg-l-50 mg-xl-l-60">
                    <div class="df-example wd-100p">
                        <form @submit.prevent="submitLogin">
                            <div class="form-group">
                                <label>Identifiant</label>
                                <input type="text" v-model="form.username" class="form-control"
                                    placeholder="ex.Geronimo" required>
                            </div>
                            <div class="form-group mb-1">
                                <div class="d-flex justify-content-between mg-b-5">
                                    <label class="mg-b-0-f">Mot de passe</label>
                                </div>
                                <input type="password" v-model="form.pwd" class="form-control"
                                    placeholder="Entrer le mot de passe..." required>
                            </div>
                            <div class="d-flex justify-content-between mb-2 mt-2">
                                <label class="mg-b-0-f"></label>
                                <a href="#/reset" class="tx-13">Mot de passe oublié ?</a>
                            </div>
                            <bs-button class="btn-primary btn-brand-02 w-100 tx-uppercase" btn-type="submit"
                                :loading="loginLoading">Connecter</bs-button>
                            <!--<div class="divider-text"></div>
                            <div class="d-grid gap-2">
                                <button class="btn btn-success btn-block"
                                    @click.prevent="$router.push({ name: 'register' })">Créer
                                    société</button>
                            </div>-->
                        </form>
                    </div>

                </div><!-- sign-wrapper -->
            </div><!-- media -->
        </div><!-- container -->
    </div>
</template>

<script>
export default {
    name: 'AuthLogin',
    data() {
        return {
            loginLoading: false,
            form: {
                username: '',
                pwd: ''
            }
        }
    },
    /* unmounted() {
        this.$router.go();
    }, */

    methods: {
        submitLogin(e) {
          let form = {
            username: this.form.username,
            password: this.form.pwd
          };
          this.loginLoading = true;
          this.$store.dispatch('auth/loggedIn', form).then((res)=>{
            console.log(JSON.stringify(res));
            this.loginLoading = false;
            if(res.response !== undefined){
              if(res.response.status === 'failed'){
                alert('nom d\'utilisateur ou mot de passe invalide !');
              }
              else{
                this.$router.replace({ name: 'secure' });
              }
            }

          })
        }
    },
}
</script>
<style scoped src="@/assets/css/dashforge.auth.css" ></style>