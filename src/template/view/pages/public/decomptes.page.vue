<template>
    <div class="content ht-100v pd-0">
        <div class="content-header">
            <div class="content-search">
                <!--  <i data-feather="search"></i>
                <input type="search" class="form-control" placeholder="Recherche service..."> -->
            </div>
            <nav class="nav">
                <a href="javascript:void(0)" class="nav-link"><i data-feather="align-left"></i></a>
            </nav>
        </div><!-- content-header -->

        <div class="content-body scrollbar-primary scrollbar-lg pos-relative bd">
            <div class="container pd-x-0">
                <div class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
                    <div>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb breadcrumb-style1 mg-b-10">
                                <li class="breadcrumb-item">Decompte</li>
                                <li class="breadcrumb-item active" aria-current="page">{{
                                    $route.params.tab.includes('bulletin') ? 'Bulletin decompte' : 'Calcul decompte' }}</li>
                            </ol>
                        </nav>
                        <h4 class="mg-b-0 tx-spacing--1">Decompte</h4>
                    </div>
                </div>

                <ul class="nav nav-line" id="myTab5" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link"
                            @click.prevent="$router.replace({ name: 'tab.decomptes', params: { tab: 'calcul' } })"
                            :class="$route.params.tab.includes('calcul') ? 'active' : ''" id="home-tab5"
                            data-bs-toggle="tab" href="#home5" role="tab" aria-controls="home" aria-selected="true"> Calcul
                            decompte</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                            @click.prevent="$router.replace({ name: 'tab.decomptes', params: { tab: 'bulletin' } })"
                            id="profile-tab5" data-bs-toggle="tab" href="#profile5"
                            :class="$route.params.tab.includes('bulletin') ? 'active' : ''" role="tab"
                            aria-controls="profile" aria-selected="false"> Bulletin decompte</a>
                    </li>
                </ul>

                <div class="tab-content mg-t-20" id="myTabContent5">
                    <div class="tab-pane fade " :class="$route.params.tab.includes('calcul') ? 'show active' : ''"
                        id="home5" role="tabpanel" aria-labelledby="home-tab5">
                        <decompte-calcul></decompte-calcul>
                    </div>
                    <div class="tab-pane fade" :class="$route.params.tab.includes('bulletin') ? 'show active' : ''"
                        id="profile5" role="tabpanel" aria-labelledby="profile-tab5">
                        <decompte-bulletin></decompte-bulletin>
                    </div>
                </div>
            </div><!-- container -->
        </div>
    </div>
</template>

<script>
import decompteCalcul from './components/decompte_calcul';
import decompteBulletin from './components/decompte_bulletin';
export default {
    name: 'DecomptesPage',
    components: {
        decompteBulletin,
        decompteCalcul
    },
    mounted() {
        new PerfectScrollbar(".content-body", {
            suppressScrollX: true,
        });
    },
}
</script>