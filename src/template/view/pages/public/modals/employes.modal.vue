<template>
	<teleport to='body'>
		<form @submit.prevent="submitData" class="modal fade scrollbar-lg" id="modalEmployes" tabindex="-1" role="dialog"
			aria-labelledby="exampleModalLabel6" aria-hidden="true">
			<div class="modal-dialog modal-xl modal-dialog-scrollable" role="document" id="modalEmployesBody">
				<div class="modal-content tx-14">
					<div class="modal-header">
						<h4 class="modal-title" id="exampleModalLabel6">Nouveau employé</h4>
						<a href="#" role="button" class="close pos-absolute t-15 r-15" data-bs-dismiss="modal"
							aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</a>
					</div>
					<div class="modal-body">
						<p class="mg-b-10 tx-danger">Veuillez renseigner tous les champs obligatoires !</p>
						<div data-label="Informations personnelles" class="df-example demo-forms">
							<div class="row">
								<div class="col-md-4">
									<label class="form-label"> Nom <span class="tx-danger">*</span></label>
									<input type="text" class="form-control" v-model="form.nom"
										placeholder="Saisir le nom de l'employé..." required>
								</div>

								<div class="col-md-4">
									<label class="form-label"> Postnom <span class="tx-danger">*</span></label>
									<input type="text" class="form-control" v-model="form.postnom"
										placeholder="Saisir le postnom de l'employé..." required>
								</div>

								<div class="col-md-4">
									<label class="form-label"> Prénom <span class="tx-danger">*</span></label>
									<input type="text" class="form-control" v-model="form.prenom"
										placeholder="Saisir le prénom de l'employé..." required>
								</div>

								<div class="col-md-4 mt-md-2">
									<label class="form-label">Sexe <span class="tx-danger">*</span></label>
									<select class="form-select" v-model="form.sexe" required>
										<option label="--Sélectionnez sexe--"></option>
										<option value="M">Masculin</option>
										<option value="F">Féminin</option>
									</select>
								</div>

								<div class="col-md-4 mt-md-2">
									<label class="form-label">Nationalité <span class="tx-danger">*</span></label>
									<input type="text" class="form-control" v-model="form.nationalite"
										placeholder="Saisir la nationalité de l'employé..." required>
								</div>

								<div class="col-md-4 mt-md-2">
									<label class="form-label">Date de naissance <span class="tx-danger">*</span></label>
									<input type="date" class="form-control" pattern="\d{4}-\d{2}-\d{2}"
										placeholder="datenais" v-model="form.date_naissance" required>
								</div>

								<div class="col-md-4 mt-md-2">
									<label class="form-label">Nombre d'enfants <span class="tx-danger">*</span></label>
									<input type="number" class="form-control" placeholder="Saisir le nbre d'enfants..."
										v-model="form.nbre_enfant" required>
								</div>

								<div class="col-md-4 mt-md-2">
									<label class="form-label">Adresse <span class="tx-danger">*</span></label>
									<input type="text" class="form-control" v-model="form.adresse"
										placeholder="Saisir l'adresse de l'employé...ex:av/n°/commune..." required>
								</div>

								<div class="col-md-4 mt-md-2">
									<label class="form-label">Email <span class="tx-danger">*</span></label>
									<input type="email" class="form-control" v-model="form.email"
										placeholder="Saisir l'email de l'agent...ex. monmail@dom" required>
								</div>

								<div class="col-md-4 mt-md-2">
									<label class="form-label">Téléphone <span class="tx-danger">*</span></label>
									<input type="text" class="form-control" v-model="form.telephone"
										placeholder="Saisir le téléphone de l'agent...ex:(+243)xx..." required>
								</div>

								<div class="col-md-4 mt-md-2">
									<label class="form-label">Matricule <span class="tx-danger">*</span></label>
									<input type="text" class="form-control" v-model="form.matricule"
										placeholder="Saisir le n° de matricule de l'agent..." required>
								</div>

								<div class="col-md-4 mt-md-2">
									<label class="form-label">Etat civil <span class="tx-danger">*</span></label>
									<select class="form-select" v-model="form.etat_civil" required>
										<option label="--Sélectionnez état civil--"></option>
										<option value="Marié(e)">Marié(e)</option>
										<option value="Célibataire">Célibataire</option>
										<option value="Veuf(ve)">Veuf(ve)</option>
										<option value="Divorcé(e)">Divorcé(e)</option>
									</select>
								</div>

							</div>
						</div>
						<div data-label="Informations de travail" class="df-example mt-md-3 demo-forms">
							<div class="row">
								<div class="col-md-4 mt-md-2" v-show="!forAgency">
									<label class="form-label">Province <span class="tx-danger">*</span></label> <br>
									<select class="form-select" id="provinceSelect2" required style="width: 100%">
										<option label="--Sélectionnez une province--"></option>
									</select>
								</div>
								<div class="col-md-4 mt-md-2" v-show="!forAgency">
									<label class="form-label">Agence <span class="tx-danger">*</span></label> <br>
									<select class="form-select" id="agenceSelect2" required style="width: 100%">
										<option label="--Sélectionnez une agence--"></option>
									</select>
								</div>

								<div class="col-md-4 mt-md-2">
									<label class="form-label">Fonction <span class="tx-danger">*</span></label> <br>
									<select class="form-select" id="fonctionSelect2" required style="width: 100%">
										<option label="--Sélectionnez une fonction--"></option>
									</select>
								</div>

								<div class="col-md-4 mt-md-2">
									<label class="form-label">Service <span class="tx-danger">*</span></label> <br>
									<select class="form-select" id="serviceSelect2" required style="width: 100%">
										<option label="--Sélectionnez une fonction--"></option>
									</select>
								</div>

								<div class="col-md-4 mt-md-2">
									<label class="form-label">Date engagement<span class="tx-danger">*</span></label>
									<input type="date" class="form-control" pattern="\d{4}-\d{2}-\d{2}"
										v-model="form.date_engagement" placeholder="date engagement"
										:required="form.date_engagement === form.date_naissance || form.date_engagement !== ''">
								</div>

								<div class="col-md-4 mt-md-2">
									<label class="form-label">Date affectation<span class="tx-danger">*</span></label>
									<input type="date" class="form-control" pattern="\d{4}-\d{2}-\d{2}"
										v-model="form.date_affectation" placeholder="date affectation"
										:required="form.date_affectation === form.date_naissance || form.date_affectation === ''">
								</div>

							</div>
						</div>
						<div data-label="Contrat" class="df-example mt-md-3 demo-forms">
							<div class="row">
								<div class="col-md-4">
									<label class="form-label">Type de contrat <span class="tx-danger">*</span></label>
									<select class="form-select" v-model="form.contrat_type">
										<option value="CDD" selected>CDD</option>
										<option value="CDI">CDI</option>
									</select>
								</div>
								<div class="col-md-4" v-if="form.contrat_type.includes('CDD')">
									<label class="form-label"> Durée<span class="tx-danger">*</span></label>
									<div class="input-group">
										<input type="text" v-model="form.duree" class="form-control"
											placeholder="Entrez la durée..." required>
										<div class="input-group-text m-0 p-0 bg-transparent">
											<select class="form-select border-0" required v-model="form.periode_unite">
												<option value="mois">Mois</option>
												<option value="années">Années</option>
												<option value="jours">Jours</option>
											</select>
										</div>
									</div>
								</div>
								<div class="col-md-4">
									<label class="form-label">Barème <span class="tx-danger">*</span></label><br>
									<div class="w-100">
										<select class="form-select" style="width:100%" id="baremeSelect2">
											<option label="--Sélectionnez barème--"></option>
										</select>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-white btn-lg" data-bs-dismiss="modal">Fermer</button>
						<bs-button btn-type="submit" :loading="isSubmitLoading" class-name="btn-success btn-lg"> <i
								data-feather="plus"></i>
							Enregister</bs-button>
					</div>
				</div>
			</div>
		</form>
	</teleport>
</template>

<script>

export default {
	name: 'EmployesCreateModal',
	props: {
		forAgency: {
			type: Boolean,
			default: false
		}
	},

	data() {
		return {
			isSubmitLoading: false,
			form: {
				nom: '',
				postnom: '',
				prenom: '',
				nationalite: '',
				sexe: '',
				date_naissance: '',
				etat_civil: '',
				date_engagement: '',
				matricule: '',
				adresse: '',
				nbre_enfant: '0',
				email: '',
				telephone: '',
				contrat_type: 'CDD',
				duree: '',
				periode_unite: 'mois',
				code_zone: 1,
				agence_id: 0,
				fonction_id: 0,
				service_id: 0,
				bareme_id: 0,
				date_affectation: ''
			}
		}
	},

	async mounted() {
		$("#modalEmployesBody").draggable();
		await this.initSelects2();
	},

	methods: {
		submitData(e) {
			this.form.code_zone = parseInt($("#provinceSelect2").val());
			this.form.agence_id = parseInt($("#agenceSelect2").val());
			this.form.fonction_id = parseInt($("#fonctionSelect2").val());
			this.form.service_id = parseInt($("#serviceSelect2").val());
			this.form.bareme_id = parseInt($("#baremeSelect2").val());
			this.isSubmitLoading = true;
			this.$store.dispatch('biotime/createEmployee', this.form).then((result) => {
				this.isSubmitLoading = false;
				if (result.response === undefined) {
					Swal({
						icon: 'warning',
						title: 'Echec',
						text: 'Une erreur est survenu lors de l\'envoie de données ! ',
						showConfirmButton: false,
						showCancelButton: false,
						timer: 3000,
					});
					return;
				}
				Swal({
					icon: 'success',
					title: 'Succès !',
					text: 'Agent créé avec succès dans le système ! ',
					showConfirmButton: false,
					showCancelButton: false,
					timer: 4000,
				});
				this.cleanField();
			});
		},

		cleanField() {
			this.form.nom = '';
			this.form.postnom = '';
			this.form.prenom = '';
			this.form.nationalite = '';
			this.form.sexe = '';
			this.form.date_naissance = '';
			this.form.etat_civil = '';
			this.form.date_engagement = '';
			this.form.matricule = '';
			this.form.adresse = '';
			this.form.contrat_type = 'CDD';
			this.form.nbre_enfant = '0';
			this.form.duree = '';
			this.form.email = '';
			this.form.telephone = '';
			this.form.periode_unite = 'mois';
			this.form.code_zone = 0;
			this.form.agence_id = 0;
			this.form.fonction_id = 0;
			this.form.service_id = 0;
			this.form.date_affectation = '';
			$("#provinceSelect2").val('').trigger('change');
			$("#agenceSelect2").val('').trigger('change');
			$("#fonctionSelect2").val('').trigger('change');
			$("#serviceSelect2").val('').trigger('change');
			this.$emit('onCreate');
		},

		async initSelects2() {
			let self = this;
			const areas = await this.$store.dispatch('biotime/allAreas');
			$('#provinceSelect2').select2({
				dropdownParent: $('#modalEmployes'),
				placeholder: '--Sélectionnez une province--',
				allowClear: true,
				data: $.map(areas, function (item) {
					return {
						text: item.area_name,
						id: item.id
					}
				})
			}).on('change', async function (e) {
				/**
				 * Load agencies of select area
				*/
				let payload = $(this).select2('data')[0].text;
				const agences = await self.$store.dispatch('erp/allAgences', payload);
				$('#agenceSelect2').empty();
				$('#agenceSelect2').select2({
					dropdownParent: $('#modalEmployes'),
					placeholder: '--Sélectionnez une agence--',
					allowClear: true,
					data: $.map(agences, function (item) {
						return {
							text: item.libelle,
							id: item.agence_id
						}
					})
				}).on('change', function (e) {
					console.log($(this).val());
				});
				$("#agenceSelect2").val('').trigger('change');
			});

			/**
			 * Load all organizations agencies
			 * and build select2
			 * */

			$('#agenceSelect2').select2({
				dropdownParent: $('#modalEmployes'),
				placeholder: '--Sélectionnez une agence--',
			});
			/**
			 * End Agence Select
			 * */

			/**
			 * Load all organizations positions
			 * and build select2
			 * */
			const fonctions = await this.$store.dispatch('biotime/allPositions');
			$('#fonctionSelect2').select2({
				dropdownParent: $('#modalEmployes'),
				placeholder: '--Sélectionnez une fonction--',
				allowClear: true,
				data: $.map(fonctions, function (item) {
					return {
						text: item.position_name,
						id: item.id
					}
				})
			}).on('change', function (e) {
				console.log($(this).val());
			});
			/**
			 * End Position Select
			 * */

			/**
			 * Load all organizations departments
			 * and build select2
			 * */
			const services = await this.$store.dispatch('biotime/allDepartments');
			$('#serviceSelect2').select2({
				dropdownParent: $('#modalEmployes'),
				allowClear: true,
				placeholder: '--Sélectionnez un service--',
				data: $.map(services, function (item) {
					return {
						text: item.dept_name,
						id: item.id
					}
				})
			}).on('change', function (e) {
				console.log($(this).val());
			});
			/**
			 * End Position Select
			 * */

			/**
			 * Barème select
			 * */
			const baremes = await this.$store.dispatch('erp/allBaremes');
			$('#baremeSelect2').select2({
				dropdownParent: $('#modalEmployes'),
				allowClear: true,
				placeholder: '--Sélectionnez barème--',
				data: $.map(baremes, function (item) {
					return {
						text: item.libelle,
						id: item.bareme_id
					}
				})
			}).on('change', function (e) {
				console.log($(this).val());
			});
		}
	}
}
</script>
