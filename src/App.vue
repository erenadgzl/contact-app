<template>
  <div id="app">
    <app-header></app-header>
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 col-sm-1 col-lg-7">
          <contact-list></contact-list>
        </div>
        <div class="col-md-6 col-sm-1 col-lg-5">
          <contact-form></contact-form>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import ContactForm from './components/ContactForm.vue'
import ContactList from './components/ContactList.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    appHeader : Header,
    appFooter : Footer,
    contactForm : ContactForm,
    contactList : ContactList
  }
}
</script>

<style>
@import url('./assets/style.css');
</style>
