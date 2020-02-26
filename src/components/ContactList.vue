<template>
<div class="container">
      <div class="form-contact">
        <div style="padding:10px" class="col-12 mb-5 card mt-5 shadow">
    <b-table :items="contactList" :fields="fields" striped responsive="sm">
      <template v-slot:cell(details)="row">
        <b-button size="sm" @click="row.toggleDetails" variant="primary" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
        </b-button>
        <b-button size="sm" @click="deleteItem(row.item)" class="mr-2" variant="danger">
          Delete
        </b-button>
      </template>

      <template v-slot:row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Phone:</b></b-col>
            <b-col>{{ row.item.selected }}</b-col>
            <b-col>{{ row.item.phone }}</b-col>
          </b-row>
        </b-card>
      </template>
    </b-table>
  </div></div></div>
</template>

<style>
</style>

<script>
import { EventBus } from "../event-bus";

export default {
  name: "ContactList",
  data() {
    return {
      contactList: [
      ],
      fields: ['name', 'title','company','details'],
    };
  },
  validations: {
  },
  methods: {
    deleteItem(item){
      this.contactList.pop(item)
    }
  },
  watch:{
  },
  mounted() {  
   // Listen for the 'clicked-event' and its payload.  
      EventBus.$on("clicked-event", form=> {  
        this.contactList.push(form) ;
      });  
   } 
};
</script>