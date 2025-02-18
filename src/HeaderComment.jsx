export function HeaderComment({ img, date, name, currentUser }) {
    return (
        <header className="flex gap-4 items-center justify-end col-start-1 row-start-1 col-end-[-1] md:col-start-2 ">
            <img src={img} className="w-[32px]"></img>
            <h2 className="font-bold">{name}</h2>
            {currentUser != null ? (
                currentUser == name ? (
                    <p className="bg-moderate-blue text-white px-2 "> you</p>
                ) : null
            ) : null}
            <p className="text-grayish-blue text-start grow">{date}</p>
        </header>
    );
}
