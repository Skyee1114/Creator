// import * as React from "react"
//
// const stats = [
//     { name: 'sfggfdgsdf fgdfsdsf sg ', value: '405' },
//     { name: 'sfgsdf gsgdf s', value: '3.65', unit: 'mins' },
//     { name: 'sfgfds g dgsf ', value: '3' },
//     { name: 'dsfg g fgsdg dsfgd', value: '98.5%' },
// ]
//
// function classNames(...classes: any[]) {
//     return classes.filter(Boolean).join(' ')
// }
//
// export function StatsListTest() {
//     return (
//         <>
//             {stats.map((stat, statIdx) => (
//                     <div
//                         key={stat.name}
//                         className={classNames(
//                             statIdx % 2 === 1 ? 'sm:border-l' : statIdx === 2 ? 'lg:border-l' : '',
//                             'border-t border-white/5 py-6 px-4 sm:px-6 lg:px-8'
//                         )}
//                     >
//                         <p className="text-sm font-medium leading-6 text-gray-400">{stat.name}</p>
//                         <p className="mt-2 flex items-baseline gap-x-2">
//                                                 <span
//                                                     className="text-4xl font-semibold tracking-tight text-white">{stat.value}</span>
//                             {stat.unit ?
//                                 <span className="text-sm text-gray-400">{stat.unit}</span> : null}
//                         </p>
//                     </div>
//                 ))}
//         </>
//     )
// }
