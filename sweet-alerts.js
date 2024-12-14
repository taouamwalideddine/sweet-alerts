class SweetAlert {
    constructor() {
      this.container = this.createContainer();
    }
  
    createContainer() {
      let container = document.querySelector('#sweet-alert-container');
      if (!container) {
        container = document.createElement('div');
        container.id = 'sweet-alert-container';
        container.className = 'fixed top-4 right-4 space-y-4 z-50';
        document.body.appendChild(container);
      }
      return container;
    }
  
    showAlert(type, message) {
      const alert = document.createElement('div');
      alert.className = `px-4 py-3 rounded shadow-lg text-white font-medium rounded-xl transition-opacity duration-500 ${this.getTypeClass(type)}`;
      alert.innerText = message;
  
      this.container.appendChild(alert);
  
      setTimeout(() => {
        alert.classList.add('opacity-0');
        setTimeout(() => alert.remove(), 500);
      }, 3000);
    }
  
    getTypeClass(type) {
      switch (type) {
        case 'success': return 'bg-black border-l-green-500 border-l-8';
        case 'info': return 'border-l-blue-500 border-l-8 bg-black';
        case 'warning': return 'bg-black border-l-yellow-500 border-l-8';
        case 'danger': return 'bg-black border-l-red-500 border-l-8';
        default: return 'bg-gray-500';
      }
    }
  }
  
  const alert = new SweetAlert();
  
  document.getElementById('info-btn').onclick = () => alert.showAlert('info', 'This is an info alert!');
  document.getElementById('success-btn').onclick = () => alert.showAlert('success','this is success alert'); 
  document.getElementById('warning-btn').onclick = () => alert.showAlert('warning', 'This is a warning alert!');
  document.getElementById('danger-btn').onclick = () => alert.showAlert('danger', 'This is a danger alert!');