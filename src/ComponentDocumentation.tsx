import React from "react";

interface ComponentDocumentationProps {
  currentComponent: string | void;
}

const ComponentDocumentation: React.FC<ComponentDocumentationProps> = ({ currentComponent }) => {
  return (
    <div className='flex w-[50%] justify-center overflow-y-auto p-20 border-l'>
      {
        currentComponent == 'RadioButton' ?
          <section>
            <h2 className="text-lg font-semibold mb-2">Radio Buttons</h2>
            <pre>
              <code>
                &lt;RadioButton size='sm' /&gt;
              </code>
            </pre>
          </section>
          : <></>
      }
      {
        currentComponent == 'Links' ?
          <section>
            <h2 className="text-lg font-semibold mb-2">Links</h2>
            <div className="flex gap-2">
            </div>
          </section> : ''
      }
      {
        currentComponent == 'Loading' ?
          <section>
            <h2 className="text-lg font-semibold mb-2">Buttons with Loading State</h2>
            <div className="flex flex-row gap-2">
            </div>
          </section> : ''
      }
      {
        currentComponent == 'Skeleton' ?
          <section>
            <h2 className="text-lg font-semibold mb-2">Skeletons</h2>
            <div className="flex flex-row gap-2 flex-wrap">
            </div>
          </section> : ''
      }
      {
        currentComponent == 'DatePicker' ?
          <section>
            <h2 className="text-lg font-semibold mb-2">Date Pickers</h2>
            <div className="flex flex-row items-center gap-2 flex-wrap">
            </div>
          </section> : ''
      }
      {
        currentComponent == 'Tooltip' ?
          <section>
            <h2 className="text-lg font-semibold mb-2">Tooltips with Button</h2>
            <div className="flex flex-row gap-2 flex-wrap">
            </div>
          </section> : ''
      }
      {
        currentComponent == 'Button' ?
          <section>
            <h2 className="text-lg font-semibold mb-2">Buttons with Icons</h2>
            <pre className="text-gray-500">
              <code>
                &lt;Button size='sm' /&gt;
              </code>
            </pre>
            <h2 className="text-lg font-semibold mb-2">Props:</h2>
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="px-4 py-2 border-b font-semibold text-sm text-gray-700">Name</th>
                  <th className="px-4 py-2 border-b font-semibold text-sm text-gray-700">Type</th>
                  <th className="px-4 py-2 border-b font-semibold text-sm text-gray-700">Default</th>
                  <th className="px-4 py-2 border-b font-semibold text-sm text-gray-700">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b text-sm text-gray-700">children</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">node</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">-</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">The content of the component.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b text-sm text-gray-700">size</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">
                    'sm' | 'md' | 'lg' | 'xl' | '2xl'
                  </td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">'md'</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">The size of the component.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b text-sm text-gray-700">variant</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">
                    'primary' | 'secondary' | 'tertiary' | 'outlined'
                  </td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">'primary'</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">The variant to use.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b text-sm text-gray-700">color</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">
                    'brand' | 'gray' | 'error' | 'warning' | 'success'
                  </td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">'brand'</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">The color to use.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b text-sm text-gray-700">startIcon</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">node</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">-</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">Element placed before the children.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b text-sm text-gray-700">endIcon</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">node</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">-</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">Element placed after the children.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b text-sm text-gray-700">disabled</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">boolean</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">-</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">If true, the component is disabled.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b text-sm text-gray-700">className</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">TailwindCSS | string</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">-</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">Override or extend the styles applied to the component.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b text-sm text-gray-700">style</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">object</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">-</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">Override or extend the styles applied to the component.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b text-sm text-gray-700">onClick</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">function</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">-</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">function to be called when button is clicked.</td>
                </tr>
              </tbody>
            </table>

          </section> : ''
      }
      {
        currentComponent == 'FAB' ?
          <section>
            <h2 className="text-lg font-semibold mb-2">Floating Action Button</h2>
            <pre className="text-gray-500">
              <code>
                &lt;FAB size="md"
                hierarchy="secondary"&gt;<br />
                &lt;BsGithub /&gt;<br />
                &lt;/FAB&gt;
              </code>
            </pre>
            <h2 className="text-lg font-semibold mb-2">Props:</h2>
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="px-4 py-2 border-b font-semibold text-sm text-gray-700">Name</th>
                  <th className="px-4 py-2 border-b font-semibold text-sm text-gray-700">Type</th>
                  <th className="px-4 py-2 border-b font-semibold text-sm text-gray-700">Default</th>
                  <th className="px-4 py-2 border-b font-semibold text-sm text-gray-700">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b text-sm text-gray-700">children</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">node</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">-</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">The content of the component.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b text-sm text-gray-700">size</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">
                    'sm' | 'md' | 'lg' | 'xl' | '2xl'
                  </td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">'md'</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">The size of the component.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b text-sm text-gray-700">variant</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">
                    'primary' | 'secondary' | 'tertiary' | 'outlined'
                  </td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">'primary'</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">The variant to use.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b text-sm text-gray-700">color</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">
                    'brand' | 'gray' | 'error' | 'warning' | 'success'
                  </td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">'brand'</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">The color to use.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b text-sm text-gray-700">disabled</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">boolean</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">-</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">If true, the component is disabled.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b text-sm text-gray-700">className</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">TailwindCSS | string</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">-</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">Override or extend the styles applied to the component.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b text-sm text-gray-700">style</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">object</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">-</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">Override or extend the styles applied to the component.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b text-sm text-gray-700">onClick</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">function</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">-</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-700">function to be called when button is clicked.</td>
                </tr>
              </tbody>
            </table>

          </section> : ''
      }
      {
        currentComponent == 'InputField' ?
          <section>
            <h2 className="text-lg font-semibold mb-2">Input Fields</h2>
            <div className="flex flex-row gap-2 flex-wrap">
            </div>
          </section> : ''
      }
      {
        currentComponent == 'Badge' ?
          <section>
            <h2 className="text-lg font-semibold mb-2">Badges</h2>
            <div className="flex flex-row gap-2 flex-wrap">
            </div>
          </section> : ''
      }
      {
        currentComponent == 'Dropdown' ?
          <section>
            <h2 className="text-lg font-semibold mb-2">Dropdown</h2>
            <div className="flex flex-row gap-2">
            </div>
          </section> : ''
      }
      {
        currentComponent == 'Toggle' ?
          <section>
            <h2 className="text-lg font-semibold mb-2">Toggle</h2>
            <div className="flex flex-row gap-2">
            </div>
          </section> : ''
      }
      {
        currentComponent == 'Checkbox' ?
          <section>
            <h2 className="text-lg font-semibold mb-2">Checkboxes</h2>
            <div className="flex flex-row gap-2">
            </div>
          </section> : ''
      }
      {
        currentComponent == 'Slider' ?
          <section>
            <h2 className="text-lg font-semibold mb-2">Slider</h2>
          </section> : ''
      }
      {
        currentComponent == 'ProgressIndicator' ?
          <section>
            <h2 className="text-lg font-semibold mb-2">Progress Indicator</h2>
            <div className="flex flex-row gap-2">
            </div>
          </section> : ''
      }
      {
        currentComponent == 'ProgressCircle' ?
          <section>
            <h2 className="text-lg font-semibold mb-2">Progress Circles</h2>
            <div className="flex flex-row gap-2 items-center flex-wrap">
            </div>
          </section> : ''
      }
      {
        currentComponent == '' ? '' : ''
      }
      {
        currentComponent == '' ? '' : ''
      }
      {
        currentComponent == '' ? '' : ''
      }
    </div>
  )
}

export default ComponentDocumentation