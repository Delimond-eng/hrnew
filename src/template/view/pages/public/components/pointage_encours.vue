<template>
    <div data-label="Pointage en cours" class="df-example mt-3">
        <h6>Pointage en cours</h6>
        <div class="row mt-2">
            <div class="col-md-2">
                <label class="form-label">Mois<span class="tx-danger">*</span></label>
                <select class="form-control">
                    <option label="Mois"></option>
                    <option value="Janvier">Janvier</option>
                    <option value="Février">Février</option>
                    <option value="Mars">Mars</option>
                    <option value="Avril">Avril</option>
                    <option value="Mai">Mai</option>
                    <option value="Juin">Juin</option>
                    <option value="Juillet">Juillet</option>
                    <option value="Août">Août</option>
                    <option value="Septembre">Septembre</option>
                    <option value="Octobre">Octobre</option>
                    <option value="Décembre">Décembre</option>
                </select>
            </div>
            <div class="col-md-2">
                <label class="form-label">Année <span class="tx-danger">*</span></label>
                <input type="text" class="form-control" placeholder="Année">
            </div>
            <div class="col-md-3">
                <label class="form-label"> Date clôture <span class="tx-danger">*</span></label>
                <input type="date" class="form-control" placeholder="date clôture">
            </div>
            <div class="col-md-2">
                <label class="form-label">Devise <span class="tx-danger">*</span></label>
                <select class="form-select">
                    <option value="Janvier" selected>CDF</option>
                    <option value="Février">USD</option>
                </select>
            </div>
            <div class="col-md-3">
                <label class="form-label">Taux <span class="tx-danger">*</span></label>
                <input type="number" class="form-control" value="1" placeholder="Enter your firstname">
            </div>

        </div>
        <hr>
        <div class="mt-3 d-flex justify-content-end">
            <button class="btn btn-success btn-lg"> <i data-feather="check"></i> Confirmer
                pointage</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PointageEnCours'
}
</script>
