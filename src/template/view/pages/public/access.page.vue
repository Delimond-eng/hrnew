<template>
    <div class="content ht-100v pd-0">
        <div class="content-header">
            <div class="content-search">
                <i data-feather="search"></i>
                <input type="search" class="form-control" placeholder="Filtrer accès...">
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
                                <li class="breadcrumb-item active" aria-current="page">Accès utilisateurs</li>
                            </ol>
                        </nav>
                        <h4 class="mg-b-0 tx-spacing--1">Accès utilisateurs</h4>
                    </div>

                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="accordion">
                            <div class="accordion-item mb-1" v-for="i in 5" :key="i">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" data-bs-toggle="collapse"
                                        :data-bs-target="`#collapse__${i}`">Super administrateur</button>
                                </h2>
                                <div class="accordion-collapse collapse" :id="`collapse__${i}`"
                                    :class="i == 0 ? 'show' : ''">
                                    <div class="accordion-body">
                                        <ul class="list-group">
                                            <li
                                                class="list-group-item border-botton-only d-flex justify-content-between align-items-center">
                                                <span>Administrateur</span>
                                                <button class="btn btn-icon btn-sm btn-white rounded-circle"><i
                                                        data-feather="trash"></i></button>
                                            </li>
                                            <li
                                                class="list-group-item border-botton-only d-flex justify-content-between align-items-center">
                                                <span>Super Administrateur</span>
                                                <button class="btn btn-icon btn-sm btn-white rounded-circle"><i
                                                        data-feather="trash"></i></button>
                                            </li>
                                            <li
                                                class="list-group-item border-botton-only d-flex justify-content-between align-items-center">
                                                <span>Chef d'agence</span>
                                                <button class="btn btn-icon btn-sm btn-white rounded-circle"><i
                                                        data-feather="trash"></i></button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="df-example">
                            <div class="list-group">
                                <li class="list-group-item d-flex align-items-center " v-for="(ac, index) in access"
                                    :key="index">
                                    <div class="wd-15 ht-15 rounded-circle bd bd-3 bd-primary mg-r-10"></div>
                                    <div class="d-flex justify-content-between w-100 align-items-center">
                                        <h6 class="tx-13 tx-inverse tx-semibold mg-b-0">{{ ac.label }}</h6>
                                        <button class="btn btn-sm btn-white" @click.prevent="access.splice(index, 1)">
                                            <i data-feather="trash"></i>
                                        </button>
                                    </div>
                                </li>
                            </div>
                        </div> -->
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <div class="df-example">
                            <p class="mg-b-20 tx-12">Veuillez créer les diffirentes accès utilisateur !
                            </p>
                            <form @submit.prevent="submitData">
                                <div class="form-group m-0">
                                    <label class="mg-b-10 form-label">Libelle accès : <span
                                            class="tx-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="entrez le libellé accès..."
                                        required>
                                </div>
                                <div class="mt-2">
                                    <label>Choisir les menus accessibles : <span class="tx-danger">*</span></label> <br>
                                    <div class="form-check-inline">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="customCheck1">
                                            <label class="custom-control-label p-lg-1" for="customCheck1">
                                                Agences </label>
                                        </div>
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="customCheck1">
                                            <label class="custom-control-label p-lg-1" for="customCheck1">Service
                                                Services</label>
                                        </div>
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="customCheck1">
                                            <label class="custom-control-label p-lg-1" for="customCheck1">
                                                Configuration fonctions</label>
                                        </div>

                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="customCheck1">
                                            <label class="custom-control-label p-lg-1" for="customCheck1">
                                                ...</label>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="d-flex ">
                                    <button type="button" class="btn btn-white  btn-block btn-lg mg-r-4 flex-fill">
                                        Annuler</button>
                                    <bs-button btn-type="submit" :loading="submitLoading"
                                        class-name="btn-success btn-block btn-lg flex-fill"> <i data-feather="check"></i>
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
    name: 'AccessPage',

    data() {
        return {
            submitLoading: false,
            forms: [
                {
                    data: ""
                }
            ],
            access: [
                {
                    label: 'Super administrateur'
                },
                {
                    label: 'Administrateur'
                }
            ]
        }
    },

    mounted() {
        new PerfectScrollbar(".content-body", {
            suppressScrollX: true,
        });
        $('#accordion1').accordion({
            heightStyle: 'content',
            collapsible: true
        });
    },

    methods: {
        submitData(e) {
            this.submitLoading = true;
            setTimeout(() => {
                this.submitLoading = false;
                for (var f of this.forms) {
                    this.access.push({ label: f.data });
                }
                this.forms = [{ data: '' }];
            }, 2000)
        }
    },
}
</script>
