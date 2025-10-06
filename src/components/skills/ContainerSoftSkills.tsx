

export default function ContainerSoftSkills({ titulo}) {
  return (
    <div className='shadow-lg mx-4 sm:mx-auto pb-8 bg-[rgb(30,30,30)] gap-8 flex flex-col rounded-xl'>
        <h3 className='shadow-[0_4px_6px_rgba(0,0,0,0.3)] text-xl px-10 py-4 md:text-2xl font-bold relative bg-gradient-to-r from-[#0a87f5] via-[#ae31fc] to-[#fc31f9] rounded-t-xl'>
            {titulo}
        </h3>
        <div className='mx-auto'>
            <ul>
                <li>Habilidad</li>
                <li>Habilidad</li>
            </ul>
        </div>
      </div>
  )
}