// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "help_center": "Help Center",
          "find_events": "Find events",
          "create_events": "Create events",
          "register": "Register",
          "sign_in": "Sign in",
          "for_customers": "For Customers",
          "blog": "Blog",
          "search_placeholder": "Search..."
        }
      },
      es: {
        translation: {
          "help_center": "Centro de ayuda",
          "find_events": "Buscar eventos",
          "create_events": "Crear eventos",
          "register": "Registrarse",
          "sign_in": "Iniciar sesión",
          "for_customers": "Para clientes",
          "blog": "Blog",
          "search_placeholder": "Buscar..."
        }
      },
      fr: {
        translation: {
          "help_center": "Centre d'aide",
          "find_events": "Trouver des événements",
          "create_events": "Créer des événements",
          "register": "S'inscrire",
          "sign_in": "Se connecter",
          "for_customers": "Pour les clients",
          "blog": "Blog",
          "search_placeholder": "Chercher..."
        }
      }
    },
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;