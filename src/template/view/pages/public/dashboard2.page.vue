<template>
    <div class="content ht-100v pd-0">
        <div class="content-header">
            <div class="content-search">
                <i data-feather="search"></i>
                <input type="search" class="form-control" placeholder="Recherche service...">
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
                                <li class="breadcrumb-item">Administration</li>
                                <li class="breadcrumb-item active" aria-current="page">Tableau de bord</li>
                            </ol>
                        </nav>
                    </div>
                    <div class="d-none d-md-block">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="card card-dashboard-table">
                            <div class="card-header bg-primary text-white text-center p-1 text-uppercase fw-bold mb-2">
                                Filtrez par
                                Département & Dates</div>
                            <div class="card-header p-1">
                                <div data-label="Date" class="df-example demo-forms p-2">
                                    <div class="d-flex align-items-center">
                                        <input v-model="dateFrom" type="date" ref="dateFrom" id="dateFrom"
                                            class="form-control hasDatepicker" placeholder="Date début">
                                        <div class="mx-2">à</div>
                                        <input type="date" ref="dateTo" id="dateTo" class="form-control hasDatepicker"
                                            placeholder="Date Fin">
                                    </div><!-- row -->
                                </div>
                                <div class="row g-1">
                                    <div class="col" v-for="i in 5" :key="i">
                                        <div class="custom-control custom-switch m-2">
                                            <input :value="i" @change="onDeptChecked" type="checkbox"
                                                class="custom-control-input mg-r-10" :id="`customSwitch${i + 1}`"><label
                                                class="custom-control-label" :for="`customSwitch${i + 1}`">Département{{
                                                    i + 1 }}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th class="text-center" colspan="12">Liste des présences journalières en
                                                temps réel</th>
                                        </tr>
                                        <tr>
                                            <th>Source</th>
                                            <th>Users</th>
                                            <th>New Users</th>
                                            <th>Sessions</th>
                                            <th>Bounce Rate</th>
                                            <th>Pages/Session</th>
                                            <th>Avg. Session</th>
                                            <th>Transactions</th>
                                            <th>Revenue</th>
                                            <th>Rate</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><a href="">Organic search</a></td>
                                            <td><strong>350</strong></td>
                                            <td><strong>22</strong></td>
                                            <td><strong>5,628</strong></td>
                                            <td><strong>25.60%</strong></td>
                                            <td><strong>1.92</strong></td>
                                            <td><strong>00:01:05</strong></td>
                                            <td><strong>340,103</strong></td>
                                            <td><strong>$2.65M</strong></td>
                                            <td><strong>4.50%</strong></td>
                                        </tr>
                                        <tr>
                                            <td><a href="">Social media</a></td>
                                            <td><strong>276</strong></td>
                                            <td><strong>18</strong></td>
                                            <td><strong>5,100</strong></td>
                                            <td><strong>23.66%</strong></td>
                                            <td><strong>1.89</strong></td>
                                            <td><strong>00:01:03</strong></td>
                                            <td><strong>321,960</strong></td>
                                            <td><strong>$2.51M</strong></td>
                                            <td><strong>4.36%</strong></td>
                                        </tr>
                                        <tr>
                                            <td><a href="">Referral</a></td>
                                            <td><strong>246</strong></td>
                                            <td><strong>17</strong></td>
                                            <td><strong>4,880</strong></td>
                                            <td><strong>26.22%</strong></td>
                                            <td><strong>1.78</strong></td>
                                            <td><strong>00:01:09</strong></td>
                                            <td><strong>302,767</strong></td>
                                            <td><strong>$2.1M</strong></td>
                                            <td><strong>4.34%</strong></td>
                                        </tr>
                                        <tr>
                                            <td><a href="">Email</a></td>
                                            <td><strong>187</strong></td>
                                            <td><strong>14</strong></td>
                                            <td><strong>4,450</strong></td>
                                            <td><strong>24.97%</strong></td>
                                            <td><strong>1.35</strong></td>
                                            <td><strong>00:02:07</strong></td>
                                            <td><strong>279,300</strong></td>
                                            <td><strong>$1.86M</strong></td>
                                            <td><strong>3.99%</strong></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div><!-- table-responsive -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- container -->
        </div>
    </div>
</template>

<script>
export default {
    name: "Dashboard2",

    data() {
        return {
            dateFrom: this.getFormattedDate(),
            depts: []
        }
    },
    methods: {
        getFormattedDate() {
            const today = new Date();
            return today.toISOString().split('T')[0]; // Convertit en format YYYY-MM-DD
        },
        onDeptChecked(e) {
            var val = e.target.value;
            if (e.target.checked) {
                if (!this.depts.includes(val)) {
                    this.depts.push(val);
                }
            } else {
                this.depts = this.depts.filter(dept => dept !== val);
            }
        }
    }
}
</script>
