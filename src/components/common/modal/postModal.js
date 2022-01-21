import React, { useState, useEffect } from "react";
import { Button } from "../button";
import { TagButton, TagReviewButton } from "../button/tagButton";
import { Stepbar } from "../stepbar";
import { CheckList } from "../checkList";
import { CustomTags } from "../customTags";
import { TagForm } from "../customTags/tagForm";
import { usePost } from "../../../hooks/usePost";
import { CheckedList } from "../../common/checkList/checkedList";
export const PostModal = ({
  setOpen,
  onClick,
  step,
  checkedPersonalTags,
  setCheckedPersonalTags,
  checkedReviewTags,
  setCheckedReviewTags,
  title,
  tags,
  isReview,
}) => {
  const {
    cliced,
    deleteHandler,
    submitHandler,
    reviewCustomTag,
    personalCustomTag,
    setReviewCustomTag,
    setPersonalCustomTag,
    isdesabled,
    reviewCustomTags,
    personalCustomTags,
  } = usePost(
    setCheckedReviewTags,
    isReview,
    setCheckedPersonalTags,
    checkedPersonalTags,
    checkedReviewTags
  );
  const [checkedPersonalNumber, setCheckedPersonalNumber] = useState([]);
  const [checkedReviewNumber, setCheckedReviewNumber] = useState([]);
  useEffect(() => {
    [...Array(3)].map((res, i) => {
      const getItem = isReview
        ? localStorage.getItem(`review${i + 1}`)
        : localStorage.getItem(`${i + 1}`);
      isReview
        ? setCheckedReviewNumber([...checkedReviewNumber, getItem])
        : setCheckedPersonalNumber([...checkedPersonalNumber, getItem]);
      return 0;
    });
  }, []);

  return (
    <div className="lg:flex justify-center items-center fixed z-50 top-0 right-0 bottom-0 left-0">
      <div
        className="absolute z-20 top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 lg:flex justify-center items-center"
        onClick={() => setOpen(false)}
      ></div>
      <div className="w-full md:w-full lg:w-6/12 lg:absolute lg:z-50  bg-white  ">
        {/*波の画像箇所 */}
        <div>
          <svg
            height="100%"
            width="100%"
            id="svg"
            viewBox="0 0 1440 400"
            xmlns="http://www.w3.org/2000/svg"
            class="transition duration-300 ease-in-out delay-150"
          >
            <path
              d="M 0,400 C 0,400 0,200 0,200 C 47.76504797906368,230.1041000290782 95.53009595812736,260.2082000581564 141,254 C 186.46990404187264,247.79179994184355 229.6446641465542,205.27129979645247 272,181 C 314.3553358534458,156.72870020354753 355.8912474556557,150.70660075603374 407,155 C 458.1087525443443,159.29339924396626 518.7903460308229,173.9022971794126 570,205 C 621.2096539691771,236.0977028205874 662.9473684210526,283.6842105263158 710,273 C 757.0526315789474,262.3157894736842 809.4201802849666,193.36086071532424 859,159 C 908.5798197150334,124.63913928467578 955.3719104390811,124.87234661238733 1009,137 C 1062.6280895609189,149.12765338761267 1123.092177958709,173.14975283512652 1165,201 C 1206.907822041291,228.85024716487348 1230.2593777260831,260.5286420471067 1273,261 C 1315.7406222739169,261.4713579528933 1377.8703111369584,230.73567897644665 1440,200 C 1440,200 1440,400 1440,400 Z"
              stroke="none"
              stroke-width="0"
              fill="#944af1ff"
              class="transition-all duration-300 ease-in-out delay-150"
              transform="rotate(-180 720 200)"
            ></path>
          </svg>
        </div>
        {/*波の画像箇所 */}

        <p className="absolute top-8 left-14 text-white">
          レビュー投稿フォーム
        </p>
        <div className="-mt-14 mb-4">
          <Stepbar activeStep={step - 1} />
        </div>

        <div className="lg:overflow-auto lg:h-96 mt-10">
          <h1 className="font-bold text-2xl text-center">{title}</h1>
          {/* チェックする箇所 */}
          {step !== 3 && (
            <>
              <CheckList
                isReview={isReview}
                count={1}
                required
                title="食欲"
                content1="小食"
                content2="一般"
                content3="大食い"
              />
              <CheckList
                isReview={isReview}
                count={2}
                required
                title="辛いもの"
                content1="苦手"
                content2="普通"
                content3="好き"
              />
              <CheckList
                isReview={isReview}
                count={3}
                required
                title="採点"
                content1="厳しめ"
                content2="普通"
                content3="優しめ"
              />
            </>
          )}
          {/* チェックする箇所 */}
          {/* STEP3箇所 */}
          {step === 3 && <h1 className="text-center mt-6">パーソナルタグ</h1>}
          {step === 3 && (
            <div className=" justify-center">
              <CheckedList
                checkedNum={localStorage.getItem(1)}
                title="食欲"
                content1="小食"
                content2="一般"
                content3="大食い"
              />
              <CheckedList
                checkedNum={localStorage.getItem(2)}
                title="辛いもの"
                content1="苦手"
                content2="普通"
                content3="好き"
              />
              <CheckedList
                checkedNum={localStorage.getItem(3)}
                title="採点"
                content1="厳しめ"
                content2="普通"
                content3="優しめ"
              />
            </div>
          )}
          <div className="flex justify-center mt-4">
            {step === 3 &&
              checkedPersonalTags.map((name) => {
                return (
                  <div className="p-3 justify-center">
                    <TagButton name={name} isReview={isReview} />
                  </div>
                );
              })}
          </div>

          {step === 3 && <h1 className="text-center mt-6">レビュータグ</h1>}
          {step === 3 && (
            <div className="justify-center">
              <CheckedList
                isReview={true}
                checkedNum={localStorage.getItem("review1")}
                title="食欲"
                content1="小食"
                content2="一般"
                content3="大食い"
              />
              <CheckedList
                checkedNum={localStorage.getItem("review2")}
                isReview={true}
                title="辛いもの"
                content1="苦手"
                content2="普通"
                content3="好き"
              />
              <CheckedList
                checkedNum={localStorage.getItem("review3")}
                isReview={true}
                title="採点"
                content1="厳しめ"
                content2="普通"
                content3="優しめ"
              />
            </div>
          )}
          <div className="flex  justify-center mt-4">
            {step === 3 &&
              checkedReviewTags.map((name) => {
                return (
                  <div className="p-3 justify-center">
                    <TagReviewButton name={name} isReview={isReview} />
                  </div>
                );
              })}
          </div>
          {/* STEP3箇所 */}

          {/* レビュータグ、パーソナルタグ選択箇所 */}
          <div className="py-4">
            {step !== 3 && (
              <>
                <p className="font-bold text-1xl text-center">
                  その他当てはまるタグを選択してください。
                </p>
                <p className="font-bold text-1xl text-center">
                  新しくあなたのタグも作成可能です。
                </p>
              </>
            )}
          </div>
          <div className="text-gray-main  lg:m-auto pt-3 mx-4 lg:w-4/5">
            {tags?.map((name) => (
              <div className="inline-block m-1 text-center">
                <TagButton name={name} isReview={isReview} cliced={cliced} />
              </div>
            ))}
          </div>
          {/* カスタムタグの送信form 箇所*/}
          {step !== 3 && (
            <div>
              <TagForm
                isReview={isReview}
                reviewCustomTag={reviewCustomTag}
                personalCustomTag={personalCustomTag}
                setReviewCustomTag={setReviewCustomTag}
                setPersonalCustomTag={setPersonalCustomTag}
                isdesabled={isdesabled}
                submitHandler={submitHandler}
              />
              {/* 自分がカスタムで作成したタグ */}
              <CustomTags
                isReview={isReview}
                reviewCustomTags={reviewCustomTags}
                deleteHandler={deleteHandler}
                cliced={cliced}
                personalCustomTags={personalCustomTags}
              />
            </div>
          )}
          {/* カスタムタグの送信form */}
          {/* ステップ数によってボタンを切り替え */}
          <div className={`py-4 text-center ${step === 3 && `pt-1`}`}>
            {step > 1 && (
              <Button
                styles="mr-4 bg-purple-secoundary"
                onClick={() => onClick("prev")}
              >
                戻る
              </Button>
            )}
            {step !== 3 && (
              <Button
                styles="bg-purple-secoundary"
                onClick={() => onClick("next")}
              >
                次へ
              </Button>
            )}
            {step === 3 && <Button styles="bg-purple-secoundary">投稿</Button>}
          </div>
        </div>
      </div>
    </div>
  );
};
