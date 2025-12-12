# My Table App

A modern data table application built with Next.js 16, React 19, and TanStack Table, featuring sortable columns, filtering, pagination, and column visibility controls.

## Features

- 📊 **Interactive Data Tables** - Powered by TanStack Table v8
- 🔍 **Advanced Filtering** - Filter data by email and other columns
- ⬆️⬇️ **Sortable Columns** - Click column headers to sort
- 👁️ **Column Visibility** - Toggle column visibility with dropdown menu
- 📄 **Pagination** - Navigate through large datasets with ease
- 🎨 **Modern UI** - Built with Radix UI and Tailwind CSS
- 📈 **Charts** - Data visualization with Recharts
- ⚡ **TypeScript** - Full type safety throughout the application

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/)
- **React:** Version 19.2.1
- **Data Table:** [TanStack Table](https://tanstack.com/table) v8
- **UI Components:** [Radix UI](https://www.radix-ui.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) v4
- **Charts:** [Recharts](https://recharts.org/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-table-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
my-table-app/
├── app/
│   ├── payments/           # Payments table feature
│   │   ├── columns.tsx     # Table column definitions
│   │   ├── data-table.tsx  # Reusable data table component
│   │   └── page.tsx        # Payments page with sample data
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── chart.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── input.tsx
│   │   └── table.tsx
│   └── test-chart.tsx      # Chart component example
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## Key Components

### DataTable Component

The `DataTable` component is a reusable, type-safe table component with:
- Column sorting
- Email filtering
- Column visibility toggle
- Pagination controls

### Payment Columns

Defined in `app/payments/columns.tsx`, includes:
- **ID:** Unique payment identifier
- **Email:** Customer email (sortable)
- **Amount:** Payment amount (formatted as USD)
- **Status:** Payment status (pending, processing, success, failed)
- **Actions:** Dropdown menu for additional operations

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Adding New Columns

Edit `app/payments/columns.tsx` to add or modify columns:

```tsx
{
  accessorKey: "yourField",
  header: "Your Header",
  cell: ({ row }) => {
    // Custom cell rendering
  }
}
```

### Modifying Data

Update the sample data in `app/payments/page.tsx` or connect to your API:

```tsx
async function getData(): Promise<Payment[]> {
  // Fetch from your API
  const response = await fetch('your-api-endpoint');
  return response.json();
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for UI component inspiration
- [TanStack Table](https://tanstack.com/table) for the powerful table library
- [Next.js](https://nextjs.org/) team for the amazing framework
