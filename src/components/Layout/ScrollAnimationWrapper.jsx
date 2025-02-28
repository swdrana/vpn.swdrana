// import {motion} from "framer-motion";

export default function ScrollAnimationWrapper({children, className, ...props}) {
  return (
    <div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={className}
      {...props}
    >
      {children}
    </div>
  )
}