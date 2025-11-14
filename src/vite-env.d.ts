/// <reference types="vite/client" />

declare module '*.svg' {
  import React from 'react';
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const content: string;
  export { ReactComponent };
  export default content;
}

declare module '*.svg?url' {
  const content: string;
  export default content;
}

