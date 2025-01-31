import { ClerkProvider, SignedIn, UserButton } from "@clerk/clerk-react";
import { Outlet, Link } from "react-router";
import './rootLayout.css';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}

const RootLayout = () => {
    return (
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
            <div className="rootLayout">
                <header>
                    <Link to="/" className="logo">
                        <img src="/logo.png" alt="logo" />
                        <span className="logo-font">
                            <span className="l-text">COCO AI</span>
                        </span>
                    </Link>
                    <div className="user">
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </ClerkProvider>
    );
};

export default RootLayout;