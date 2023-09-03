<template>
    <div class="content ht-100v pd-0">

        <!-- content-header -->
        <div class="content-header">
            <div class="content-search">
                <i data-feather="search"></i>
                <input type="search" class="form-control">
            </div>
            <nav class="nav">
                <a href="javascript:void(0)" class="nav-link"><i data-feather="align-left"></i></a>
            </nav>
        </div>
        <!-- content-header -->

        <!-- content-body -->
        <div class="content-body scrollbar-primary scrollbar-lg pos-relative bd">
            <div class="container pd-x-0">
                <div class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
                    <div>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb breadcrumb-style1 mg-b-10">
                                <li class="breadcrumb-item">Editions</li>
                                <li class="breadcrumb-item active" aria-current="page">{{ $route.query.q }}</li>
                            </ol>
                        </nav>
                        <h4 class="mg-b-0 tx-spacing--1">{{ $route.query.q }}</h4>
                    </div>
                    <div class="d-none d-md-block">
                    </div>
                </div>
                <div :data-label="`Edition ${$route.query.q}`" class="df-example mt-3">
                    <h6> {{ $route.query.q.includes('Intercalaire') ? 'Exercice annuel' : 'Période' }} </h6>
                    <div class="row">
                        <div class="col-md-8">
                            <div class="input-group">
                                <input v-if="$route.query.q.includes('Intercalaire')" type="text" class="form-control"
                                    placeholder="ex: 2023">
                                <select class="form-select" v-else>
                                    <option label="--Sélectionnez une période--"></option>
                                </select>

                                <bs-button :loading="isSubmitLoading" class-name="btn-success btn-lg" btn-type="submit"> <i
                                        data-feather="printer"></i>
                                    Afficher</bs-button>
                            </div>
                        </div>

                    </div>
                </div>
            </div><!-- container -->
        </div>
        <!-- content-body -->

    </div>
</template>

<script>
export default {
    name: 'EditionsPage',

    data() {
        return {
            isSubmitLoading: false,
        }
    },
}
</script>