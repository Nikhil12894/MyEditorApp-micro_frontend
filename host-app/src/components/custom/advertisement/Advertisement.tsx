
/**
 * Our Advertisement section can be used to provide various adds on a site.
 *
 * @property heading and add size
 *
 * @returns React component that can be easily integrated into any web application.
 */

const Advertisement = () => {
   return (
      <div className="container mx-auto w-11/12 lg:w-8/12 bg-slate-200/50 dark:bg-slate-800/50">
         <div className="py-4 text-slate-950 dark:text-white text-center rounded-xl font-work">
            <p className="text-sm">Advertisement</p>
            <p className="text-xl font-semibold leading-6">You can place ads</p>
            <p className="text-lg leading-[26px]">750x100</p>
         </div>
      </div>
   )
}

export default Advertisement
