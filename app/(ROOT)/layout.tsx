import NavBar from "@/app/components/NavBar";

export default function Layout({ children}: Readonly<{children: React.ReactElement}>) {
    return (
        <main className="font-work-sans ">
            <NavBar />
            {children}
        </main>
    )
};