export default function SkillBox(skill: string) {
  return (
    <div
      className="p-1 rounded-2xl border-[1px] border-black w-fit text-[10px]"
      key={skill}
    >
      {skill}
    </div>
  );
}
