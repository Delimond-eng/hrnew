<template>
    <div>
        <div data-label="Calcul decompte" class="df-example mt-3">
            <div class="row mt-2">
                <div class="col-md-2">
                    <label class="form-label">Matricule<span class="tx-danger">*</span></label>
                    <input type="text" class="form-control" placeholder="matricule...">
                </div>
                <div class="col-md-3">
                    <label class="form-label"> Motif cessation <span class="tx-danger">*</span></label>
                    <select class="form-select">
                        <option value="Licenciement" selected>Licenciement</option>
                        <option value="Démission">Démission</option>
                        <option value="Retraite">Retraite</option>
                        <option value="Décès">Décès</option>
                        <option value="Cas de force majeure">Cas de force majeure</option>
                        <option value="Départ négocié">Départ négocié</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label class="form-label">Date du départ <span class="tx-danger">*</span></label>
                    <input type="date" class="form-control" placeholder="date du depart">
                </div>
                <div class="col-md-2">
                    <label class="form-label">Vehiculé ? <span class="tx-danger">*</span></label>
                    <select class="form-select">
                        <option value="Non" selected>Non</option>
                        <option value="Oui">Oui</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label class="form-label">Logé ? <span class="tx-danger">*</span></label>
                    <select class="form-select">
                        <option value="Non" selected>Non</option>
                        <option value="Oui">Oui</option>
                    </select>
                </div>
            </div>
        </div>

        <div data-label="Temps de travail" class="df-example mt-3">
            <div class="row mt-2">
                <div class="col-md-3">
                    <label class="form-label">Préavis<span class="tx-danger">*</span></label>
                    <input type="number" class="form-control" placeholder="préavis...">
                </div>

                <div class="col-md-3">
                    <label class="form-label">Congé préavis<span class="tx-danger">*</span></label>
                    <input type="number" class="form-control" placeholder="Congé préavis...">
                </div>

                <div class="col-md-3">
                    <label class="form-label">Jours à prester<span class="tx-danger">*</span></label>
                    <input type="number" class="form-control" placeholder="Jours à prester...">
                </div>

                <div class="col-md-3">
                    <label class="form-label">Jours prestés<span class="tx-danger">*</span></label>
                    <input type="number" class="form-control" placeholder=">Jours prestés...">
                </div>

                <div class="col-md-3 mt-2">
                    <label class="form-label">Jours fériés<span class="tx-danger">*</span></label>
                    <input type="number" class="form-control" placeholder="Jours fériés...">
                </div>
                <div class="col-md-3 mt-2">
                    <label class="form-label">Jours fériés prestés<span class="tx-danger">*</span></label>
                    <input type="number" class="form-control" placeholder="Jours fériés prestés...">
                </div>
                <div class="col-md-3 mt-2">
                    <label class="form-label">Jours de suspension<span class="tx-danger">*</span></label>
                    <input type="number" class="form-control" placeholder="Jours de suspension...">
                </div>

                <div class="col-md-3 mt-2">
                    <label class="form-label">Absences justifiées<span class="tx-danger">*</span></label>
                    <input type="number" class="form-control" placeholder="Absences justifiées...">
                </div>

                <div class="col-md-3 mt-2">
                    <label class="form-label">Jours de maladie<span class="tx-danger">*</span></label>
                    <input type="number" class="form-control" placeholder="Jours de maladie...">
                </div>

                <div class="col-md-3 mt-2">
                    <label class="form-label">Jours de congé<span class="tx-danger">*</span></label>
                    <input type="number" class="form-control" placeholder="Jours de congé...">
                </div>

                <div class="col-md-3 mt-2">
                    <label class="form-label">Jours de congé payés<span class="tx-danger">*</span></label>
                    <input type="number" class="form-control" placeholder="Jours de congé payés...">
                </div>

                <div class="col-md-3 mt-2">
                    <label class="form-label">Congés de circonstance<span class="tx-danger">*</span></label>
                    <input type="number" class="form-control" placeholder="Congés de circonstance...">
                </div>

                <div class="col-md-3 mt-2">
                    <label class="form-label">Jours de congé médical<span class="tx-danger">*</span></label>
                    <input type="number" class="form-control" placeholder="Jours de congé médical...">
                </div>

                <div class="col-md-3 mt-2">
                    <label class="form-label">Jours de congé maternité<span class="tx-danger">*</span></label>
                    <input type="number" class="form-control" placeholder="Jours de congé maternité...">
                </div>
            </div>
        </div>

        <div data-label="Heures supplementaires" class="df-example mt-3">
            <div class="row mt-2">
                <div class="col-md-4">
                    <label class="form-label">Heure sup130 <small>(laissez vide si non
                            applicable)</small>
                        <span class="tx-danger">*</span></label>
                    <input type="number" class="form-control" placeholder="heure sup130...">
                </div>

                <div class="col-md-4">
                    <label class="form-label">Heure sup160 <small>(laissez vide si non
                            applicable)</small><span class="tx-danger">*</span></label>
                    <input type="number" class="form-control" placeholder="heure sup160...">
                </div>

                <div class="col-md-4">
                    <label class="form-label">Heure sup200 <small>(laissez vide si non
                            applicable)</small><span class="tx-danger">*</span></label>
                    <input type="number" class="form-control" placeholder="heure sup200...">
                </div>
            </div>
        </div>

        <div data-label="Salaire" class="df-example mt-3">
            <div class="row mt-2">
                <div class="col-md-2">
                    <label class="form-label"> Devise <span class="tx-danger">*</span></label>
                    <select class="form-select">
                        <option value="CDF" selected>CDF</option>
                        <option value="USD">USD</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label class="form-label">Taux <span class="tx-danger">*</span></label>
                    <input type="number" class="form-control" placeholder="taux...">
                </div>

                <div class="col-md-3">
                    <label class="form-label">Avance sur salaire <span class="tx-danger">*</span></label>
                    <input type="number" class="form-control" placeholder="Avance sur salaire...">
                </div>

                <div class="col-md-3">
                    <label class="form-label">Quinzaine <span class="tx-danger">*</span></label>
                    <input type="number" class="form-control" placeholder="Quinzaine...">
                </div>

                <div class="col-md-2">
                    <label class="form-label">Prét <span class="tx-danger">*</span></label>
                    <input type="number" class="form-control" placeholder="Prét...">
                </div>
            </div>
        </div>

        <div data-label="Autres éléments occasionnels imposables" class="df-example mt-3">
            <div class="row">
                <div class="col-md-6" v-for="(item, index) in autreElImposables" :key="index">
                    <div class="input-group mb-3">
                        <input type="text" v-model="item.libelle" class="form-control" placeholder="Libellé">
                        <input type="number" v-model="item.montant" class="form-control" placeholder="montant">
                        <div class="input-group-text m-0 p-0 bg-transparent">
                            <select class="form-select border-0" v-model="item.devise">
                                <option value="CDF" selected>CDF</option>
                                <option value="USD">USD</option>
                            </select>
                        </div>
                        <button class="btn btn-icon btn-light tx-primary" v-if="index == autreElImposables.length - 1"
                            @click.prevent="autreElImposables.push({
                                libelle: '',
                                montant: '',
                                devise: 'CDF'
                            })"> <i data-feather="plus"></i></button>
                        <button class="btn btn-icon btn-light tx-danger" v-else
                            @click.prevent="autreElImposables.splice(index, 1)"> <i data-feather="trash-2"></i></button>
                    </div>
                </div>
            </div>
        </div>

        <div data-label="Autres éléments occasionnels non imposables" class="df-example mt-3">
            <div class="row">
                <div class="col-md-6" v-for="(item, index) in autreElNonImposables" :key="index">
                    <div class="input-group mb-3">
                        <input type="text" v-model="item.libelle" class="form-control" placeholder="Libellé">
                        <input type="number" v-model="item.montant" class="form-control" placeholder="montant">
                        <div class="input-group-text m-0 p-0 bg-transparent">
                            <select class="form-select border-0" v-model="item.devise">
                                <option value="CDF" selected>CDF</option>
                                <option value="USD">USD</option>
                            </select>
                        </div>
                        <button class="btn btn-icon btn-light tx-primary" v-if="index == autreElNonImposables.length - 1"
                            @click.prevent="autreElNonImposables.push({
                                libelle: '',
                                montant: '',
                                devise: 'CDF'
                            })"> <i data-feather="plus"></i></button>
                        <button class="btn btn-icon btn-light tx-danger" v-else
                            @click.prevent="autreElNonImposables.splice(index, 1)"> <i data-feather="trash-2"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="mt-3 d-flex justify-content-end">
            <button class="btn btn-success btn-lg"> <i data-feather="check"></i> Soumettre &
                valider</button>
        </div>
    </div>
</template>


<script>
export default {
    name: 'DecompteCalcul',

    data() {
        return {
            autreElImposables: [
                {
                    libelle: '',
                    montant: '',
                    devise: 'CDF'
                }
            ],

            autreElNonImposables: [
                {
                    libelle: '',
                    montant: '',
                    devise: 'CDF'
                }
            ],

        }
    },
}
</script>