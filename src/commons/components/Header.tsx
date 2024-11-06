import { Button } from "@/core/components/ui/button"

const Header = () => {
    return (
        <header>
            <section className="flex justify-between">
                <figure>
                    <img src='http://fakeimg.pl/40x40?text=Logo&font=lobster' alt='' className="rounded-full w-10 h-10" />
                </figure>
                <div className="flex gap-4">
                    <Button variant='default'>Log in</Button>
                    <Button variant='outline'>Get Started</Button>
                </div>
            </section>

        </header>
    )
}

export default Header