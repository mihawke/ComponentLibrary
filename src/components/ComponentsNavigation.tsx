import React from 'react';

interface ComponentsNavigationProps {
  currentComponent: string | void;
  onSelect: (componentName: string) => void;
}

const ComponentsNavigation: React.FC<ComponentsNavigationProps> = ({ onSelect, currentComponent }) => {
  const components = ['Button', 'FAB', 'RadioButton', 'Links', 'Loading', 'Skeleton', 'DatePicker', 'Tooltip', 'InputField', 'Badge', 'Dropdown', 'Toggle', 'Checkbox', 'Slider', 'ProgressIndicator', 'ProgressCircle','Card']; // Example list of components

  return (
    <nav className="bg-brand-900 min-w-fit h-[650px] border-gray-300 overflow-y-auto">
      <ul className="text-gray-100">
        {components.map((component, index) => (
          <li
            key={index}
            onClick={() => onSelect(component)}
            className={`cursor-pointer px-10 py-2 hover:bg-brand-600 hover:text-white transition-colors ${currentComponent == component ? 'bg-brand-700' : ''}`}
          >
            {component}
          </li>
        ))}
      </ul>
    </nav>

  );
};

export default ComponentsNavigation;
