export function BackerlistTab() {
  
    return (      
        <div className="pt-8 pb-32">
            <table className="w-full table-fixed">
                <thead>
                    <tr className="border-b">
                        <th className="w-1/4 text-xl text-left py-4">Username</th>
                        <th className="w-1/4 text-xl text-left">Pledged funds</th>
                        <th className="w-1/4 text-xl text-left">Date</th>
                    </tr>
                </thead>
                <tbody className="font-medium text-[#838694]">
                    <tr className="border-b">
                        <td className="w-1/4 py-4">Sofia Rodriguez</td>
                        <td className="w-1/4">$33</td>
                        <td className="w-1/4">February 28, 2024 1:06 am</td>
                    </tr>
                    <tr className="border-b">
                        <td className="w-1/4 py-4">Liam Patel</td>
                        <td className="w-1/4">$12</td>
                        <td className="w-1/4">February 27, 2024 7:28 am</td>
                    </tr>
                    <tr className="border-b">
                        <td className="w-1/4 py-4">Emma Chang</td>
                        <td className="w-1/4">$27,021</td>
                        <td className="w-1/4">February 22, 2024 5:08 am</td>
                    </tr>
                </tbody>
            </table>
        </div>        
    );
}
