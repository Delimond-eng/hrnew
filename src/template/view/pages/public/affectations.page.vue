<template>
    <div class="content ht-100v pd-0">
        <div class="content-header">
            <div class="content-search">
                <!--  <i data-feather="search"></i>
                <input type="search" class="form-control" placeholder="Recherche service..."> -->
            </div>
            <nav class="nav">
                <async-button></async-button>
            </nav>
        </div><!-- content-header -->

        <div class="content-body scrollbar-primary scrollbar-lg pos-relative bd">
            <div class="container pd-x-0">
                <div class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
                    <div>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb breadcrumb-style1 mg-b-10">
                                <li class="breadcrumb-item">Affectations</li>
                                <li class="breadcrumb-item active" aria-current="page">
                                    {{ $route.params.affect.includes('avances') ? 'avances sur salaire' :
                                        $route.params.affect
                                    }}
                                </li>
                            </ol>
                        </nav>

                    </div>
                </div>

                <ul class="nav nav-line" id="myTab5" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link"
                            @click.prevent="$router.replace({ name: 'affectations', params: { affect: 'agents' } })"
                            :class="$route.params.affect.includes('agents') ? 'active' : ''" id="agents-tab"
                            data-bs-toggle="tab" href="#agents" role="tab" aria-controls="home"
                            aria-selected="true">Affectation agents</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link"
                            @click.prevent="$router.replace({ name: 'affectations', params: { affect: 'primes' } })"
                            id="primes-tab" data-bs-toggle="tab" href="#primes"
                            :class="$route.params.affect.includes('primes') ? 'active' : ''" role="tab"
                            aria-controls="profile" aria-selected="false"> Affectation primes</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link"
                            @click.prevent="$router.replace({ name: 'affectations', params: { affect: 'conges' } })"
                            id="conges-tab" data-bs-toggle="tab" href="#conges"
                            :class="$route.params.affect.includes('conges') ? 'active' : ''" role="tab"
                            aria-controls="profile" aria-selected="false"> Affectation congés</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link"
                            @click.prevent="$router.replace({ name: 'affectations', params: { affect: 'primes' } })"
                            id="primes-tab" data-bs-toggle="tab" href="#primes"
                            :class="$route.params.affect.includes('primes') ? 'active' : ''" role="tab"
                            aria-controls="profile" aria-selected="false"> Affectation primes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                            @click.prevent="$router.replace({ name: 'affectations', params: { affect: 'avances' } })"
                            id="avances-tab" data-bs-toggle="tab" href="#avances"
                            :class="$route.params.affect.includes('avances') ? 'active' : ''" role="tab"
                            aria-controls="avances-tab" aria-selected="false"> Affectation avance sur salaire</a>
                    </li>
                </ul>

                <div class="tab-content mg-t-20" id="myTabContent5">
                    <div class="tab-pane fade " :class="$route.params.affect.includes('agents') ? 'show active' : ''"
                        id="agents" role="tabpanel" aria-labelledby="avances-tab">
                        <affectation-agent v-if="$route.params.affect.includes('agents')"></affectation-agent>
                    </div>
                    <div class="tab-pane fade" :class="$route.params.affect.includes('conges') ? 'show active' : ''"
                        id="conges" role="tabpanel" aria-labelledby="conges-tab">
                        <affectation-conge v-if="$route.params.affect.includes('conges')"></affectation-conge>
                    </div>

                    <div class="tab-pane fade" :class="$route.params.affect.includes('primes') ? 'show active' : ''"
                        id="primes" role="tabpanel" aria-labelledby="primes-tab">
                        <affectation-prime v-if="$route.params.affect.includes('primes')"></affectation-prime>
                    </div>

                    <div class="tab-pane fade" :class="$route.params.affect.includes('avances') ? 'show active' : ''"
                        id="avances" role="tabpanel" aria-labelledby="avances-tab">
                        <affectation-avance v-if="$route.params.affect.includes('avances')"></affectation-avance>
                    </div>
                </div>
            </div><!-- container -->
        </div>
    </div>
</template>

<script>
import AffectationAgent from './components/affectation_agent'
import AffectationConge from './components/affectation_conge'
import AffectationPrime from './components/affectation_prime'
import AffectationAvance from './components/affectation_avance'
export default {
    name: 'AffectationsPage',
    components: {
        AffectationAgent,
        AffectationConge,
        AffectationPrime,
        AffectationAvance
    },
    mounted() {

        new PerfectScrollbar(".content-body", {
            suppressScrollX: true,
        });
    },
}
</script>