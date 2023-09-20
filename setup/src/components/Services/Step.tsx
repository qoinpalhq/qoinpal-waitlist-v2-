type Props = {
  num: string;
  title: string;
  subtext: string;
  end: boolean;
}

const Step: React.Fc<Props> = ({ num, title, end, subtext }) => (
  <div className={`flex gap-7 items-center relative  pb-24`}>

    <span className="font-medium text-sm ">{num} </span>

    <div>
      <h3 className="font-medium"> {title} </h3>
      <p className="subtext font-light"> {subtext} </p>
    </div>

    {!end && <div className="h-[80px] bg-black w-[1px] absolute bottom-0">

    </div>
    }

  </div>

)

export default Step