interface Tablebody {
    left: string | number;
    right: string | number;
}
interface Tablepops {
    heading: string;
    bodyrows: Tablebody[]
    thead1: string;
    thead2: string;
}
function Table({ heading, bodyrows, thead1, thead2 }: Tablepops) {
    return (
        <>
            <div>
                {heading && <h1 className="text-3xl font-semibold my-10 ">{heading}</h1>}
                <div className="overflow-hidden rounded-2xl border border-gray-300">
                    <table className="border p-2 w-full">
                        <thead>
                        <tr className="bg-cyan-800">
                            <th className="text-center text-white text-lg px-4 py-4 w-1/2 border-b border-cyan-950">{thead1}</th>
                            <th className="text-center text-white text-lg px-4 py-4  border-b border-cyan-950">{thead2}</th>
                        </tr>
                        </thead>
                        <tbody>
                            {bodyrows.map((bodyrow, i) => (
                                <tr key={i}>
                                    <td className="text-center text-lg px-4 py-4 bg-gray-50">{bodyrow.left}</td>
                                    <td className="text-center text-lg px-4 py-4 bg-gray-50">{bodyrow.right}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
export default Table;