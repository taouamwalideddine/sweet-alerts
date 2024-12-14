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
      alert.className = `px-4 py-3 rounded shadow-lg text-white font-medium transition-opacity duration-500 ${this.getTypeClass(type)}`;
      alert.innerText = message;
  
      this.container.appendChild(alert);
  
      setTimeout(() => {
        alert.classList.add('opacity-0');
        setTimeout(() => alert.remove(), 500);
      }, 3000);
    }
  
    getTypeClass(type) {
      switch (type) {
        case 'success': return 'bg-green-500';
        case 'info': return 'bg-blue-500';
        case 'warning': return 'bg-yellow-500 text-black';
        case 'danger': return 'bg-red-500';
        default: return 'bg-gray-500';
      }
    }
  }
  
  const alert = new SweetAlert();
  
  document.getElementById('info-btn').onclick = () => alert.showAlert('info', 'This is an info alert!');
  document.getElementById('success-btn').onclick = () => alert.showAlert('success','this is success alert'); 
  document.getElementById('warning-btn').onclick = () => alert.showAlert('warning', 'This is a warning alert!');
  document.getElementById('danger-btn').onclick = () => alert.showAlert('danger', 'This is a danger alert!');