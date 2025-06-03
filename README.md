# [`atomic`](https://hieudoanm.github.io/atomic/)

![cover](./images/cover.jpg)

## Table of Contents

- [`atomic`](#atomic)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Code](#code)
    - [Assets](#assets)
      - [SVG Icons](#svg-icons)
      - [Emojis](#emojis)
    - [Components](#components)
      - [Charts](#charts)
      - [UI](#ui)
        - [Inspired By](#inspired-by)
      - [Page Templates](#page-templates)
    - [React](#react)
      - [React Contexts](#react-contexts)
      - [React Hooks](#react-hooks)
  - [Roadmap](#roadmap)
  - [Contributing](#contributing)
  - [License](#license)

## Introduction

- `atomic` is a modern, free collection of Tailwind UI, React Hooks, Contexts, Utilities, Icons, Charts, and Templates—built for fast, accessible, and maintainable interfaces.
  - [`atomic/charts`][atomic-components-charts]: is a curated set of responsive, customizable charts tailored specifically for SaaS products and marketing websites.
  - [`atomic/ui`][atomic-components-ui]: is a free set of Tailwind CSS components built following atomic design principles for consistent UI development.
  - [`atomic/react-contexts`][atomic-react-contexts]: are essential React context providers focused on simplicity, reusability, and scalability for better state management.
  - [`atomic/react-hooks`][atomic-react-hooks]: is a collection of reusable React hooks built for simplicity, efficiency, and ease of integration.
  - [`atomic/emojis`][atomic-visual-emojis]: is an easy-to-access, curated collection of diverse emojis to enhance user experience and add personality to your interfaces.
  - [`atomic/icons`][atomic-visual-icons]: is a free collection of carefully crafted SVG icons, designed to enhance modern user interfaces with scalable visuals.
  - [`atomic/templates`][atomic-templates]: are responsive, professionally designed web and app templates created for SaaS platforms and marketing landing pages.

Browse the website for the components/hooks you need, copy the code and paste it into your project.

## Code

Status: `In Progress` - `Completed`

```txt
atomic
├── public
│   ├── assets
│   │   ├── fonts
│   │   ├── images
│   │   └── svg
│   ├── favicon.ico
│   ├── manifest.json
│   ├── robots.txt
│   └── sitemap.xml
├── src
│   ├── assets
│   │   ├── fonts
│   │   ├── images
│   │   └── svg
│   ├── components
│   │   ├── charts
│   │   └── ui
│   ├── constants
│   ├── contexts
│   ├── environments
│   ├── hooks
│   ├── templates
│   └── utils
├── .gitattributes
├── .gitignore
├── .node-version
├── .npmrc
├── .nvmrc
├── .prettierignore
├── .prettierrc.json
├── package.json
├── README.md
└── tsconfig.json
```

### Assets

#### SVG Icons

#### Emojis

### Components

#### Charts

| No  | Name           | Status      |
| --- | -------------- | ----------- |
| 1   | Area           | In Progress |
| 2   | Bar            | In Progress |
| 3   | Bubble         | In Progress |
| 4   | Doughnut / Pie | In Progress |
| 5   | Line           | In Progress |
| 6   | Polar Area     | In Progress |
| 7   | Radar          | In Progress |
| 8   | Scatter        | In Progress |

#### UI

`atomic/ui` offer 44 components for free.

| No  | Group No | Group Name | Component            | Status      |
| --- | -------- | ---------- | -------------------- | ----------- |
| 01  | 01.01    | Auth       | Sign In              | Completed   |
| 02  | 01.02    | Auth       | Sign Up              | Completed   |
| 03  | 01.03    | Auth       | Forget Password      | Completed   |
| 04  | 01.04    | Auth       | Reset Password       | Completed   |
| 05  | 02.01    | Button     | Button               | Completed   |
| 06  | 02.02    | Button     | Button Group         | Completed   |
| 07  | 02.03    | Button     | Button - Dropdown    | Completed   |
| 08  | 02.04    | Button     | Icon Button          | Completed   |
| 09  | 03.01    | Data       | List                 | Completed   |
| 10  | 03.02    | Data       | Stats                | Completed   |
| 11  | 03.03    | Data       | Table                | Completed   |
| 12  | 03.04    | Data       | Tooltip              | Completed   |
| 13  | 03.05    | Feedback   | Alert                | Completed   |
| 14  | 03.06    | Feedback   | Badge                | Completed   |
| 15  | 03.07    | Feedback   | Loading              | Completed   |
| 16  | 03.08    | Feedback   | Progress             | Completed   |
| 17  | 03.09    | Feedback   | Skeleton             | Completed   |
| 18  | 03.10    | Feedback   | Toast                | Completed   |
| 19  | 04.01    | Form       | Calendar             | Completed   |
| 20  | 04.02    | Form       | Checkbox             | Completed   |
| 21  | 04.03    | Form       | Input                | Completed   |
| 22  | 04.04    | Form       | Radio                | Completed   |
| 23  | 04.05    | Form       | Range                | Completed   |
| 24  | 04.06    | Form       | Select               | Completed   |
| 25  | 04.07    | Form       | Textarea             | Completed   |
| 26  | 04.08    | Form       | Toggle               | Completed   |
| 27  | 05.01    | Layout     | Accordian            | Completed   |
| 28  | 05.02    | Layout     | Card                 | Completed   |
| 29  | 05.03    | Layout     | Collapse             | Completed   |
| 30  | 05.04    | Layout     | Divider              | Completed   |
| 31  | 05.05    | Layout     | Drawer               | In Progress |
| 32  | 05.06    | Layout     | Footer               | Completed   |
| 33  | 05.07    | Layout     | Hero                 | Completed   |
| 34  | 05.08    | Layout     | Modal                | Completed   |
| 35  | 06.01    | Marketing  | CTA (Call to Action) | Completed   |
| 36  | 06.02    | Marketing  | Features             | Completed   |
| 37  | 06.03    | Marketing  | Pricing              | Completed   |
| 38  | 06.04    | Marketing  | Testimonials         | Completed   |
| 39  | 07.01    | Media      | Avatar               | Completed   |
| 40  | 07.02    | Media      | Carousel             | Completed   |
| 41  | 07.03    | Media      | Diff                 | In Progress |
| 42  | 07.04    | Media      | File                 | Completed   |
| 43  | 08.01    | Mockup     | Browser              | Completed   |
| 44  | 08.02    | Mockup     | Phone                | Completed   |
| 45  | 08.03    | Mockup     | Terminal             | Completed   |
| 46  | 08.04    | Mockup     | Window               | Completed   |
| 47  | 09.01    | Navigation | Breadcrumbs          | Completed   |
| 48  | 09.02    | Navigation | Menu                 | Completed   |
| 49  | 09.03    | Navigation | Navbar               | Completed   |
| 50  | 09.04    | Navigation | Pagination           | Completed   |
| 51  | 09.05    | Navigation | Steps                | Completed   |
| 52  | 09.06    | Navigation | Tabs                 | Completed   |
| 53  | 10.01    | Typography | Code                 | Completed   |
| 54  | 10.02    | Typography | KBD (Keyboard)       | Completed   |
| 55  | 10.03    | Typography | Heading              | Completed   |
| 56  | 10.04    | Typography | Text                 | Completed   |

##### Inspired By

- React Hooks
  - [useHooks](https://usehooks.com/)
  - [useHooksTS](https://usehooks-ts.com/)
- UI Components
  - CSS Utilities
    - [DaisyUI](https://daisyui.com/)
    - [Flowbite](https://flowbite.com)
    - [HyperUI](https://www.hyperui.dev/)
    - [MerakiUI](https://merakiui.com/)
    - [Tailwind UI](https://tailwindui.com/)
  - React
    - [Ant Design](https://ant.design/)
    - [Chakra UI](https://chakra-ui.com/)
    - [Headless UI](https://headlessui.com/)
    - [Hero UI](https://www.heroui.com/)
    - [Material UI](https://mui.com/)
    - [Radix UI](https://www.radix-ui.com/)
    - [shadcn/ui](https://ui.shadcn.com/)

#### Page Templates

### React

#### React Contexts

`atomic/contexts`

1. `LanguageContext`
2. `ModalContext`
3. `NotificationsContext`
4. `SettingsContext`
5. `ThemeContext`
6. `UserContext`

#### React Hooks

`atomic/hooks` offer 16 components for free.

| No  | Group No | Group Name | Hook                  | Status    |
| --- | -------- | ---------- | --------------------- | --------- |
| 01  | 1.1      | Boolean    | `use-boolean`         | Completed |
| 02  | 1.2      | Boolean    | `use-toggle`          | Completed |
| 03  | 2.1      | Events     | `use-keyboard`        | Completed |
| 04  | 2.2      | Events     | `use-online`          | Completed |
| 05  | 2.3      | Events     | `use-resize`          | Completed |
| 06  | 2.4      | Events     | `use-scroll`          | Completed |
| 07  | 3.1      | Info       | `use-battery`         | Completed |
| 08  | 3.2      | Info       | `use-browser`         | Completed |
| 09  | 3.3      | Info       | `use-language`        | Completed |
| 10  | 3.4      | Info       | `use-screen`          | Completed |
| 11  | 4.1      | Navigator  | `use-clipboard`       | Completed |
| 12  | 4.2      | Navigator  | `use-geolocation`     | Completed |
| 13  | 5.1      | Storage    | `use-local-storage`   | Completed |
| 14  | 5.2      | Storage    | `use-session-storage` | Completed |
| 15  | 6.1      | Time       | `use-timeout`         | Completed |
| 16  | 6.2      | Time       | `use-interval`        | Completed |

## Roadmap

- [ ] `fetch`

## Contributing

You can create a new branch and submit your changes in a PR. Please note that all PRs need to be reviewed.

## License

`atomic` is an open source project licensed under the [GPL-3.0](./LICENSE) license.

[atomic-components-charts]: https://hieudoanm.github.io/atomic/components/charts/
[atomic-components-ui]: https://hieudoanm.github.io/atomic/components/ui/
[atomic-react-contexts]: https://hieudoanm.github.io/atomic/react/contexts/
[atomic-react-hooks]: https://hieudoanm.github.io/atomic/react/hooks/
[atomic-visual-emojis]: https://hieudoanm.github.io/atomic/visual/emojis/
[atomic-visual-icons]: https://hieudoanm.github.io/atomic/visual/icons/
[atomic-templates]: https://hieudoanm.github.io/atomic/templates/
