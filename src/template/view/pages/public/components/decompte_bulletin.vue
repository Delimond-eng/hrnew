<template>
    <div data-label="Bulletin decompte" class="df-example mt-3">
        <h6>Matricule</h6>
        <div class="row">
            <div class="col-md-8">
                <div class="input-group">
                    <input class="form-control form-control-lg" type="text"
                        placeholder="Entrez le numéro matricule de l'employé...">
                    <button class="btn btn-brand-02 btn-lg"> <i data-feather="clipboard"></i>
                        Afficher</button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'DecompteBulletin'
}
</script>