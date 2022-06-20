import Calculator from "@/components/Calculator";

export const calculatorRoutes = [
    {
        path: "/",
        component: Calculator
    },
    {
        path: "*",
        component: Calculator
    },
    {
        path: "/calculator",
        name: 'Calculator',
        component: Calculator
    }
]