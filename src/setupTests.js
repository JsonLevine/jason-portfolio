global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
  
  global.IntersectionObserver = class IntersectionObserver {
    constructor() {}

    observe() {
      return null;
    }
  
    unobserve() {
      return null;
    }
  
    disconnect() {
      return null;
    }
  };