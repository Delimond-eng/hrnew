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
                        <div class="accordion" id="accessListAccordion">
                            <div v-for="(acc, i) in access" :key="i" class="mb-2">
                                <h6 class="d-flex justify-content-between align-items-center"><span>{{ acc.label }}</span><a
                                        href="javascript:void(0)"><i width="15" data-feather="trash"></i>
                                    </a>
                                </h6>
                                <div class="df-example p-3">
                                    <ul class="list-inline list-inline-skills">
                                        <li class="list-inline-item">
                                            <a href="javascript:void(0)"
                                                class="d-flex justify-content-between align-items-center">
                                                <span class="mg-r-10">Configuration utilisateurs</span>
                                                <i width="12" data-feather="x"></i>
                                            </a>
                                        </li>

                                        <li class="list-inline-item">
                                            <a href="javascript:void(0)"
                                                class="d-flex justify-content-between align-items-center">
                                                <span class="mg-r-10">Gestion agents</span>
                                                <i width="12" data-feather="x"></i>
                                            </a>

                                        </li>
                                        <li class="list-inline-item">

                                            <a href="javascript:void(0)"
                                                class="d-flex justify-content-between align-items-center">
                                                <span class="mg-r-10">Gestion agence</span>
                                                <i width="12" data-feather="x"></i>
                                            </a>
                                        </li>

                                        <li class="list-inline-item">
                                            <a href="javascript:void(0)"
                                                class="d-flex justify-content-between align-items-center">
                                                <span class="mg-r-10">Configuration heures de pointage</span>
                                                <i width="12" data-feather="x"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
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
                                    <div class="accordion mt-2" id="menuAccordion">
                                        <div v-for="(menu, index) in menus" :key="index" class="mb-1">
                                            <h6>{{ menu.title }}</h6>
                                            <div>
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" @change="triggerCheckAll($event, menu)"
                                                        class="custom-control-input" :id="`customCheckAll${menu.id}`">
                                                    <label class="custom-control-label fw-bold p-lg-1"
                                                        :for="`customCheckAll${menu.id}`">
                                                        Cochez tout
                                                    </label>
                                                </div>
                                                <div class="custom-control custom-checkbox"
                                                    v-for="(sub, i) in menu.submenus" :key="i">
                                                    <input type="checkbox" class="custom-control-input"
                                                        :id="`customCheck${sub.id}`" :checked="sub.checked">
                                                    <label class="custom-control-label p-lg-1"
                                                        :for="`customCheck${sub.id}`">
                                                        {{ sub.text }}
                                                    </label>
                                                </div>
                                            </div>
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


<style scoped src="@/assets/css/dashforge.profile.css"></style>
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
                },
                {
                    label: 'Chef d\'agence'
                },
            ],
            menus: menus
        }
    },

    mounted() {
        new PerfectScrollbar(".content-body", {
            suppressScrollX: true,
        });
        $('#menuAccordion').accordion({
            heightStyle: 'content',
            header: "div h6",
            active: false,
            collapsible: true,
        });

        $('#accessListAccordion').accordion({
            heightStyle: 'content',
            header: 'div h6',
            collapsible: true,
            active: false
        });
    },

    methods: {
        /*trigger check all access for a group  */
        triggerCheckAll(event, menu) {
            let isChecked = event.target.checked
            if (isChecked) {
                for (let sub of menu.submenus) {
                    sub.checked = true;
                }
            }
            else {
                for (let sub of menu.submenus) {
                    sub.checked = false;
                }
            }
        },

        /* Method allow to submit user fields(not empty) form datas */
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

var menus = [
    {
        id: "01",
        title: "Administration",
        checkedAll: false,
        submenus: [
            { id: '011', text: 'Configuration accès utilisateurs', checked: false },
            { id: '012', text: 'Gestion agences' },
            { id: '013', text: 'Gestion employés', checked: false },
            { id: '014', text: 'Configuration barèmes', checked: false },
            { id: '015', text: 'Configuration fonctions', checked: false },
            { id: '016', text: 'Configuration heures de pointage', checked: false },
            { id: '017', text: 'Configuration heures supplémentaires', checked: false },
            { id: '018', text: 'Configuration primes', checked: false },
            { id: '019', text: 'Configuration services', checked: false },
            { id: '0120', text: 'Création utilisateurs', checked: false },
            { id: '0121', text: 'Voir rapport visiteurs', checked: false },
            { id: '0122', text: 'Configuration planning des congés', checked: false },
            { id: '0123', text: 'Enrollement employés', checked: false },
        ]
    },
    {
        id: "02",
        title: "Agence",
        checkedAll: false,
        submenus: [
            { id: '021', text: 'Voir services', checked: false },
            { id: '022', text: 'Gestion des employés', checked: false },
            { id: '023', text: 'Voir rapport des présences', checked: false },
            { id: '024', text: 'Enrollement des agents', checked: false },
            { id: '025', text: 'Voir rapport des visiteurs', checked: false },

        ]
    },
    {
        id: '03',
        title: "Affectation",
        checkedAll: false,
        submenus: [
            { id: '031', text: 'Affectation agents', checked: false },
            { id: '032', text: 'Affectation primes', checked: false },
            { id: '033', text: 'Affectation congés', checked: false },
            { id: '034', text: 'Affectation avances sur salaire', checked: false },
        ]
    },
    {
        id: "04",
        title: "Editions",
        checkedAll: false,
        submenus: [
            { id: '041', text: 'Edition Feuille de paie', checked: false },
            { id: '042', text: 'Edition Bulletin de paie', checked: false },
            { id: '043', text: 'Edition CNSS', checked: false },
            { id: '014', text: 'Edition IPR', checked: false },
            { id: '045', text: 'Edition INPP & ONEM', checked: false },
            { id: '046', text: 'Edition Intercalaire', checked: false },
            { id: '047', text: 'Edition Net à payer', checked: false },
            { id: '048', text: 'Edition Quinzaine', checked: false },
            { id: '049', text: 'Edition Avance sur salaire', checked: false },
        ]
    },
    {
        id: "05",
        title: "Décompte",
        checkedAll: false,
        submenus: [
            { id: '051', text: 'Calcul décompte', checked: false },
            { id: '052', text: 'Bulletin décompte', checked: false },
        ]
    }

]
</script>
