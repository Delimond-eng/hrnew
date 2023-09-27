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
                                <li class="breadcrumb-item">Mises à jour</li>
                                <li class="breadcrumb-item active" aria-current="page">Pointages</li>
                            </ol>
                        </nav>

                    </div>
                </div>

                <ul class="nav nav-line" id="myTab5" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="home-tab5" data-bs-toggle="tab" href="#home5" role="tab"
                            aria-controls="home" aria-selected="true"> Pointage en
                            cours</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="profile-tab5" data-bs-toggle="tab" href="#profile5" role="tab"
                            aria-controls="profile" aria-selected="false">Pointage
                            antérieur</a>
                    </li>
                </ul>

                <div class="tab-content mg-t-20" id="myTabContent5">
                    <div class="tab-pane fade show active" id="home5" role="tabpanel" aria-labelledby="home-tab5">
                        <pointage-en-cours></pointage-en-cours>
                    </div>
                    <div class="tab-pane fade" id="profile5" role="tabpanel" aria-labelledby="profile-tab5">
                        <pointage-anterieur></pointage-anterieur>
                    </div>
                </div>
            </div><!-- container -->
        </div>
    </div>
</template>

<script>
import pointageAnterieur from './components/pointage_anterieur';
import pointageEnCours from './components/pointage_encours';
export default {
    name: 'PointagesPage',
    components: {
        pointageAnterieur,
        pointageEnCours
    },

    mounted() {

        new PerfectScrollbar(".content-body", {
            suppressScrollX: true,
        });
    },
}
</script>