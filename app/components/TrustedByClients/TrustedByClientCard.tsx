type TrustedByClientCardProps = {
  imageURL: string;
  imageAlt?: string;
};

export const TrustedByClientCard: React.FC<TrustedByClientCardProps> = ({ imageURL, imageAlt = "client card alt" }: TrustedByClientCardProps) => {
  return (
      <div className="flex items-center justify-center mb-4">
        <img src={imageURL} alt={imageAlt} style={{width: "170px", height: "43px"}} />
      </div>
  );
};
