<template>
    <div data-label="Pointage antérieur" class="df-example mt-3">
        <h6>Période</h6>
        <div class="row">
            <div class="col-md-8">
                <div class="input-group">
                    <select class="form-select form-control-lg">
                        <option label="--Sélectionnez une période--"></option>
                        <option value="Periode_1">Periode_1</option>
                        <option value="Periode_2">Periode_2</option>
                    </select>
                    <button class="btn btn-success btn-lg"> <i data-feather="clipboard"></i>
                        Afficher</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PointageAnterieur'
}
</script>