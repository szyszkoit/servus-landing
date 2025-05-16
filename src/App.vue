<template>
  <div class="bg-neutral-light min-h-screen font-sans text-neutral-dark">
    <!-- HEADER -->
    <header class="w-full px-8 py-5 bg-white shadow-sm flex justify-between items-center">
      <h1 class="text-3xl font-bold text-primary">Servus</h1>
      <a href="#signup" class="text-primary hover:underline font-medium">Dołącz do testów</a>
    </header>

    <!-- HERO -->
    <section class="text-center py-24 px-6 bg-white">
      <h2 class="text-5xl font-bold text-neutral-dark mb-6 leading-tight">
        Zarządzanie sprzętem <br />w Twojej firmie nigdy nie było prostsze
      </h2>
      <p class="text-xl text-neutral mb-8 max-w-2xl mx-auto">
        Servus to nowoczesne narzędzie dla firm technicznych – kontroluj projekty, przeglądy i zespół z jednego miejsca.
      </p>
      <a href="#signup" class="inline-block bg-primary text-white px-8 py-4 text-lg rounded-xl font-semibold hover:bg-primary-dark transition">
        Dołącz do wersji beta
      </a>
    </section>

    <!-- FEATURES -->
    <section class="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 py-20">
      <div class="bg-white rounded-2xl shadow-lg p-6 text-center">
        <h3 class="text-2xl font-semibold text-primary mb-2">Ewidencja sprzętu</h3>
        <p class="text-neutral">Dodawaj, śledź i zarządzaj narzędziami. Przypomnienia o przeglądach, certyfikaty, historia.</p>
      </div>
      <div class="bg-white rounded-2xl shadow-lg p-6 text-center">
        <h3 class="text-2xl font-semibold text-primary mb-2">Zarządzanie projektami</h3>
        <p class="text-neutral">Śledź postępy prac, przypisuj zadania, miej wgląd w to co się dzieje na budowie.</p>
      </div>
      <div class="bg-white rounded-2xl shadow-lg p-6 text-center">
        <h3 class="text-2xl font-semibold text-primary mb-2">Zespół i ekipy</h3>
        <p class="text-neutral">Przypisuj ludzi do projektów, planuj grafik, kontaktuj się szybko i skutecznie.</p>
      </div>
    </section>

    <!-- MOCKUP -->
    <section class="px-6 py-10 flex justify-center bg-white">
      <img
        src="https://via.placeholder.com/1000x500.png?text=Podgląd+dashboardu"
        alt="Dashboard Servus"
        class="rounded-2xl shadow-2xl border border-gray-200"
      />
    </section>

    <!-- SIGNUP -->
    <section id="signup" class="bg-primary-light py-20 px-6 text-center">
      <h2 class="text-3xl sm:text-4xl font-bold text-primary-dark mb-4">Chcesz testować Servus jako pierwszy?</h2>
      <p class="text-lg text-neutral-dark mb-8 max-w-xl mx-auto">
        Zapisz się, a damy Ci wcześniejszy dostęp do wersji beta i zniżkę na przyszłą subskrypcję.
      </p>
      <form @submit.prevent="submitForm" class="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
        <input
          v-model="email"
          type="email"
          required
          placeholder="Twój e-mail"
          class="px-5 py-3 rounded-lg border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          type="submit"
          class="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
        >
          Zapisz się
        </button>
      </form>
      <p v-if="submitted" class="text-green-600 mt-4">✅ Zapisano! Odezwiemy się wkrótce.</p>
    </section>

    <!-- FOOTER -->
    <footer class="bg-white py-6 text-center text-neutral text-sm">
      © 2025 Servus. Wszelkie prawa zastrzeżone.
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const submitted = ref(false)

function submitForm() {
  console.log('Zapisany e-mail:', email.value)
  submitted.value = true
  // Tu podłącz np. EmailJS, Google Sheets albo Supabase
}
</script>