import { Menu } from '@headlessui/react';
import { Float } from '@headlessui-float/react';
import Block from '@/components/Block';

export default function ExamplePortal() {
  return (
    <div className="border bg-gray-100 overflow-y-scroll max-h-[200px]">
      <Block
        title="Portal"
        contentClass="h-[200px] p-4"
        data-testid="block-portal"
      >
        <Menu>
          <Float composable placement="bottom-start" offset={4} portal>
            <Float.Reference>
              <Menu.Button className="flex justify-center items-center px-5 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-500 text-sm rounded-md mt-20">
                Options
              </Menu.Button>
            </Float.Reference>

            <Float.Content>
              <Menu.Items className="w-48 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="button"
                      className={`block w-full px-4 py-1.5 text-left text-sm ${
                        active ? 'bg-indigo-500 text-white' : ''
                      }`}
                    >
                      Account settings
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="button"
                      className={`block w-full px-4 py-1.5 text-left text-sm ${
                        active ? 'bg-indigo-500 text-white' : ''
                      }`}
                    >
                      Documentation
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item disabled>
                  <span className="block w-full px-4 py-1.5 text-left text-sm opacity-50 cursor-default">
                    Invite a friend (coming soon!)
                  </span>
                </Menu.Item>
              </Menu.Items>
            </Float.Content>
          </Float>
        </Menu>
      </Block>
      <div className="text-4xl">Hello</div>
      <div className="text-4xl">Hello</div>
    </div>
  );
}
