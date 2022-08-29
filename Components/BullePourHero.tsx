

function BullePourHero({couleurBackground}: string) {
  return (
    <div className= {couleurBackground  + " " + "rounded-full text-white w-80 h-fit  m-14 px-12 py-5"}>

        <h1 className="font-semibold">NOM ACTIVITE</h1>
        <ul>
            <li>1-test</li>
            <li>2-test</li>
            <li>3-test</li>
        </ul>

    </div>
  )
}

export default BullePourHero