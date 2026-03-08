// Définition du composant App2View

const App2View = {
  
  template: `
    <div id="app-2" class="container">
      <h2><i class="bi bi-app"></i> Application 2</h2>
      <p>Cette app reçoit et envoie des props à App 1.</p>
      <div class="row">
        <div class="col-md-6">
          <component-2 :received-prop="sharedData.prop1" @send-data="handleDataFrom2InApp2"></component-2>
        </div>
        <div class="col-md-6">
          <component-1 @update-prop="updateProp2"></component-1>
        </div>
      </div>
      <div class="mt-3">
        <p>Données partagées:</p>
        <pre>{{ JSON.stringify(sharedData, null, 2) }}</pre>
        <p>Test d'expression:</p>
        <pre>{ 1 > 5 ? 'oui' : 'non' }</pre>
        <p>Test de méthode:</p>
        <pre>[[ sharedData.prop1.toUpperCase() ]]</pre>
        <p>Test de v-binding:</p>
        <pre v-if="sharedData.prop1">[[ sharedData.prop1.toUpperCase() ]]</pre>
        <div :class="[isActive ? activeClass : '', errorClass]"></div>
        <div :class="[{ [activeClass]: isActive }, errorClass]"></div>
        <!-- MyComponent template using $attrs -->
        <p :class="$attrs.class">Hi!</p>
        <span>This is a child component</span>


      </div>
    </div>
  `,

  computed: {
    sharedData() {
      return window.sharedData || { prop1: '', prop2: '' };
    }
  },

  data() {
    return {
      localSharedData: window.sharedData || { prop1: '', prop2: '' }
    };
  },

  methods: {
    updateProp2(value) {
      window.sharedData.prop2 = value;
    },
    handleDataFrom2InApp2(data) {
      window.sharedData.prop1 = 'Réponse de App2: ' + data.tasks.length + ' éléments';
    }
  }

};