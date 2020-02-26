<template>
  <div>
    <div class="container">
      <div class="form-contact">
        <div style="padding:10px" class="col-12 mb-5 card mt-5 shadow">
          <b-form @submit.stop.prevent="onSubmit">
            <b-form-group id="example-input-group-1" label="Name" label-for="example-input-1">
              <b-form-input
                id="example-input-1"
                name="example-input-1"
                v-model="$v.form.name.$model"
                :state="validateState('name')"
                aria-describedby="input-1-live-feedback"
              ></b-form-input>

              <b-form-invalid-feedback
                id="input-1-live-feedback"
              >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
            </b-form-group>

            <b-form-group id="example-input-group-2" label="Company" label-for="example-input-2">
              <b-form-input
                id="example-input-2"
                name="example-input-2"
                v-model="$v.form.company.$model"
                :state="validateState('company')"
                aria-describedby="input-2-live-feedback"
              ></b-form-input>

              <b-form-invalid-feedback
                id="input-2-live-feedback"
              >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
            </b-form-group>

            <b-form-group id="example-input-group-3" label="Title" label-for="example-input-3">
              <b-form-input
                id="example-input-3"
                name="example-input-3"
                v-model="$v.form.title.$model"
                :state="validateState('title')"
                aria-describedby="input-3-live-feedback"
              ></b-form-input>

              <b-form-invalid-feedback
                id="input-3-live-feedback"
              >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
            </b-form-group>

            <div class="row"><label class="col-12">Phone Number</label></div>
            <b-form style="margin:10px" inline>       
              <b-form-select v-model="form.selected" size="sm" :options="phoneTypeOptions" class="col-3"></b-form-select>
              <span class="col-1"></span>
              <vue-tel-input v-model="form.phone" class="col-8"></vue-tel-input>
            </b-form>

            <b-button type="submit" variant="success">Submit</b-button>
            <b-button class="ml-2" @click="resetForm()">Reset</b-button>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.form-contact {
  display: flex;
  margin-left: auto;
  margin-right: auto;
}
</style>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
import { EventBus } from "../event-bus";

export default {
  name: "ContactForm",
  mixins: [validationMixin],
  data() {
    return {
      form: {
        name: null,
        title: null,
        company: null,
        phone: null,
        selected: null
      },
      phoneTypeOptions: [
          { value: null, text: 'Seçiniz' },
          { value: 'Mobil', text: 'Mobil' },
          { value: 'İş', text: 'İş' },
          { value: 'Ev', text: 'Ev' },
          { value: 'Diğer', text: 'Diğer' }
      ]
    };
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3)
      },
      title: {
        required,
        minLength: minLength(3)
      },
      company: {
        required,
        minLength: minLength(3)
      },
      phone: {
        required
      },
      selected: {
        required
      }
    }
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        name: null,
        company: null,
        title: null,
        phone: null,
        selected:null
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      EventBus.$emit("clicked-event", this.form);
      this.resetForm()
    }
  }
};
</script>