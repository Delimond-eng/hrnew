<template>
    <div class="content ht-100v pd-0">
        <div class="content-header">
            <div class="content-search">
                <i data-feather="search"></i>
                <input type="search" class="form-control" placeholder="Recherche service...">
            </div>
            <nav class="nav">
                <a href="#" class="nav-link"><i data-feather="align-left"></i></a>
            </nav>
        </div><!-- content-header -->

        <div class="content-body scrollbar-primary scrollbar-lg pos-relative bd">
            <div class="container pd-x-0">
                <div class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
                    <div>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb breadcrumb-style1 mg-b-10">
                                <li class="breadcrumb-item"><a href="#">Administration</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Services</li>
                            </ol>
                        </nav>
                        <h4 class="mg-b-0 tx-spacing--1">Services</h4>
                    </div>
                    <div class="d-none d-md-block">

                        <!-- <button class="btn btn-sm pd-x-15 btn-primary btn-uppercase mg-l-5"><i data-feather="plus"
                                class="wd-10 mg-r-5"></i> Nouveau service</button> -->
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 col-xl-8">

                        <!-- services loop -->
                        <div class="row row-sm">

                            <div class="col-md-4 mg-md-b-15" v-for="i in services" :key="i">
                                <div class="card card-event animate__pulse">
                                    <div class="card-img-top bg-primary w-100 d-flex align-content-center align-items-center"
                                        style="height: 80px;">
                                        <h3 class="m-2 tx-white">Info</h3>
                                        <!-- <button
                                            class="btn btn-light tx-danger rounded-circle btn-icon pos-absolute t-10 r-10"><i
                                                data-feather="trash"></i> </button> -->
                                    </div>

                                    <div class="card-body tx-13">
                                        <h5><a href="#">Informatique</a></h5>
                                    </div><!-- card-body -->
                                    <div class="card-footer tx-13">
                                        <span class="tx-color-03">Agents</span>
                                        <span class="tx-color-01">02</span>

                                    </div><!-- card-footer -->
                                </div><!-- card -->
                            </div><!-- col -->

                        </div><!-- row -->
                        <!-- end loop -->

                        <!-- Empty state message -->
                        <!-- <div class="row d-flex justify-content-center align-items-center h-100 w-100">
                            <div class="col-md-5">
                                <div class="wd-150 wd-sm-250 mg-b-30"><img src="assets/img/img17.png" class="img-fluid"
                                        alt=""></div>
                                <h5 class="tx-center">Veuillez créer des services !</h5>
                            </div>
                        </div> -->
                    </div><!-- col -->
                    <div class="col-sm-7 col-md-5 col-lg-4 col-xl-4">
                        <div class="card ">
                            <h5 class="card-header"> Nouveau service</h5>
                            <div class="card-body">
                                <section>
                                    <p class="mg-b-20 tx-12">Veuillez renseigner tous les champs pour créer un nouveau
                                        service
                                        !
                                    </p>
                                    <form @submit.prevent="services.push('')">
                                        <div class="form-group">
                                            <label class="form-label">Nom du service: <span
                                                    class="tx-danger">*</span></label>
                                            <input id="service-name" class="form-control" name="firstname"
                                                placeholder="Entrer le nom du service..." type="text" required>
                                        </div><!-- col -->
                                        <div class="form-group">
                                            <label class="form-label">Libellé: <span class="tx-danger">*</span></label>
                                            <input id="service-label" class="form-control" name="lastname"
                                                placeholder="Entrer le libellé du service..." type="text" required>
                                        </div><!-- col -->
                                        <div class="d-grid gap-2">
                                            <button type="submit" class="btn btn-success btn-block"> <i
                                                    data-feather="plus"></i> Ajouter</button>
                                        </div>
                                    </form>
                                </section>
                            </div>
                        </div>
                    </div><!-- col -->
                </div><!-- row -->

            </div><!-- container -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'ServicesPage',

    data() {
        return {
            services: []
        }
    },

    mounted() {
        for (let i = 0; i < 4; i++) {
            this.services.push('' + i);
        }
        new PerfectScrollbar(".content-body", {
            suppressScrollX: true,
        });
    },
}
</script>