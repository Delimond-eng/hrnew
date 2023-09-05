<template>
    <div class="content ht-100v pd-0">
        <div class="content-header">
            <div class="content-search">
                <i data-feather="search"></i>
                <input type="search" class="form-control" placeholder="Filtrer poste...">
            </div>
            <nav class="nav">
                <a href="javascript:void(0)" class="nav-link"><i data-feather="align-left"></i></a>
            </nav>
        </div>
        <!-- content-header -->
        <div class="content-body scrollbar-primary scrollbar-lg pos-relative bd">
            <div class="container pd-x-0">
                <div class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
                    <div>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb breadcrumb-style1 mg-b-10">
                                <li class="breadcrumb-item">Administration</li>
                                <li class="breadcrumb-item active" aria-current="page">Postes de travail</li>
                            </ol>
                        </nav>
                        <h4 class="mg-b-0 tx-spacing--1">Postes de travail</h4>
                    </div>

                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="df-example">
                            <div class="list-group">
                                <li class="list-group-item d-flex align-items-center " v-for="(ac, index) in posts"
                                    :key="index">
                                    <div class="wd-30 border-2 border-light rounded-circle ">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" checked="true" class="custom-control-input"
                                                id="customCheck1">
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between w-100 align-items-center">
                                        <h6 class="tx-13 tx-inverse tx-semibold mg-b-0">{{ ac.label }}</h6>
                                        <button class="btn btn-sm btn-white" @click.prevent="posts.splice(index, 1)">
                                            <i data-feather="trash"></i>
                                        </button>
                                    </div>
                                </li>
                            </div>

                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <div class="df-example">
                            <p class="mg-b-20 tx-12">Veuillez créer les diffirentes accès utilisateur !
                            </p>
                            <form @submit.prevent="submitData">
                                <div class="form-group m-0">
                                    <label class="mg-b-10 form-label">Libellé poste : <span
                                            class="tx-danger">*</span></label>
                                    <div class="input-group mb-2" v-for="(form, index) in forms" :key="index">
                                        <input type="text" class="form-control" v-model="form.data"
                                            placeholder="entrez le libellé poste..." required>
                                        <button v-if="index === forms.length - 1" class="btn btn-white tx-primary btn-lg"
                                            @click.prevent="forms.push({ data: '' })"><i data-feather="plus"></i></button>
                                        <button v-else class="btn btn-white tx-danger"
                                            @click.prevent="forms.splice(index, 1)">
                                            <i data-feather="trash"></i></button>
                                    </div>
                                </div>
                                <hr>
                                <div class="d-flex ">
                                    <button type="button" class="btn btn-white  btn-block btn-lg mg-r-4 flex-fill">
                                        Annuler</button>
                                    <bs-button btn-type="submit" :loading="submitLoading"
                                        class-name="btn-primary btn-block btn-lg flex-fill"> <i data-feather="plus"></i>
                                        Ajouter</bs-button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- container -->
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'PostePage',

    data() {
        return {
            submitLoading: false,
            forms: [
                {
                    data: ""
                }
            ],

            posts: [
                {
                    label: 'agent cat1'
                }
            ]
        }
    },

    mounted() {
        new PerfectScrollbar(".content-body", {
            suppressScrollX: true,
        });
    },

    methods: {
        submitData(e) {
            this.submitLoading = true;
            setTimeout(() => {
                this.submitLoading = false;
                for (var f of this.forms) {
                    this.posts.push({ label: f.data });
                }
                this.forms = [{ data: '' }];
            }, 2000)
        }
    },
}
</script>