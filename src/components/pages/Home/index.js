import React, { useState, useEffect } from "react";
import { Button } from "../../common/button";
import { PostModal } from "../../common/modal/postModal";
import { Review } from "../../common/review";
import { PersTag, RevTag } from "../../common/tag";
import style from "./style.module.css";
export default function Index() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [clickedTag, setClickedtag] = useState("全て");
  const [isReview, setIsReview] = useState(false);
  const [count, setCount] = useState(0);
  const [checkedPersonalTags, setCheckedPersonalTags] = useState([]);
  const [checkedReviewTags, setCheckedReviewTags] = useState([]);

  const persTagData = [
    "小食",
    "大食い",
    "グルメ",
    "激辛好き",
    "甘いもの好き",
    "一般体型",
    "味音痴",
    "味にうるさい",
    "見た目にこだわる",
    "辛いの苦手",
    "潔癖症",
    "男",
    "女",
    "毒舌",
    "寛容",
    "量重視",
    "見た目重視",
    "味重視",
  ];

  const revTagData = [
    "美味しい",
    "美味しくない",
    "好き",
    "嫌い",
    "また食べたい",
    "量が多い",
    "量が少ない",
    "ちょうどいい量",
    "見た目豪華",
    "胸焼け",
    "さっぱり",
    "物足りない",
    "味が濃い",
    "味が薄い",
    "いまいち",
    "大好き",
    "コスパ最強",
    "辛い",
  ];

  const review = ["美味しい", "量は少し多め", "気に入った", "コスパ最強"];

  const onClick = (type) => {
    if (type === "next") {
      const nextStep = step + 1;
      setStep(nextStep);
    } else {
      const prevStep = step - 1;
      setStep(prevStep);
    }
  };
  let index = 0;

  useEffect(() => {
    [...Array(5)].map(() => {
      if (clickedTag === "全て" || review.find((res) => res === clickedTag)) {
        index = index + 1;
      }
    });
    setCount(index);
  }, [clickedTag]);

  return (
    <div>
      {open && step === 1 && (
        <PostModal
          title={"あなたのパーソナルタグを選んでください"}
          onClick={onClick}
          tags={[
            "大食い",
            "一般体系",
            "辛いの苦手",
            "見た目重視",
            "少食",
            "コスパ重視",
            "グルメ",
            "激辛大好き",
            "味にうるさい",
          ]}
          step={step}
          checkedPersonalTags={checkedPersonalTags}
          setCheckedPersonalTags={setCheckedPersonalTags}
          checkedReviewTags={checkedReviewTags}
          setCheckedReviewTags={setCheckedReviewTags}
          setStep={setStep}
          setOpen={setOpen}
        />
      )}

      {open && step === 2 && (
        <PostModal
          title={"インプレッションタグを選んでください"}
          onClick={onClick}
          step={step}
          tags={[
            "美味しい",
            "量が多い",
            "味が薄い",
            "量が少ない",
            "激辛",
            "あっさり",
            "気に入った",
            "コスパ重視",
            "甘辛",
          ]}
          isReview
          checkedPersonalTags={checkedPersonalTags}
          setCheckedPersonalTags={setCheckedPersonalTags}
          checkedReviewTags={checkedReviewTags}
          setCheckedReviewTags={setCheckedReviewTags}
          setStep={setStep}
          setOpen={setOpen}
        />
      )}

      {open && step === 3 && (
        <PostModal
          title={"レビュー内容はこちらでよろしいですか？"}
          onClick={onClick}
          step={step}
          checkedPersonalTags={checkedPersonalTags}
          z={setCheckedPersonalTags}
          checkedReviewTags={checkedReviewTags}
          setCheckedReviewTags={setCheckedReviewTags}
          setStep={setStep}
          setOpen={setOpen}
        />
      )}

      <div className={style.all}>
        <div className={style.topContent}>
          <h1 className="text-4xl font-bold">カスタマーレビュー</h1>
          <Button
            styles="hidden lg:block bg-purple-secoundary ml-5"
            onClick={() => setOpen(true)}
          >
            投稿する
          </Button>
        </div>
        <div className={style.tagContent}>
          <h3 className="text-lg font-bold my-1">パーソナルタグ</h3>
          <div>
            {persTagData.map((res) => (
              <PersTag
                onClick={() => {
                  setIsReview(false);
                }}
              >
                {res}
              </PersTag>
            ))}
          </div>
          <h3 className="text-lg font-bold my-1">インプレッションタグ</h3>
          <div>
            {revTagData.map((res) => (
              <RevTag
                onClick={() => {
                  setClickedtag(res);
                  setIsReview(true);
                }}
              >
                {res}
              </RevTag>
            ))}
            {clickedTag !== "全て" && (
              <RevTag
                onClick={() => {
                  setClickedtag("全て");
                  setIsReview(true);
                }}
              >
                全て
              </RevTag>
            )}
          </div>
        </div>
        <div className="mt-10">
          <div className="w-8/12">
            <h3 className="text-lg font-bold my-1">
              {clickedTag ? (
                isReview ? (
                  <RevTag>{clickedTag}</RevTag>
                ) : (
                  <RevTag>{clickedTag}</RevTag>
                )
              ) : (
                <RevTag>全て</RevTag>
              )}
              <span>のレビュー</span>
              <span className="ml-5 tracking-widest">{`${count}件/${count}件`}</span>
              {/* <span className="text-gray-600 text-sm">全てのレビューを表示</span> */}
            </h3>
            <div className="mt-2 bg-gray-100">
              {[...Array(5)].map(() => {
                return (
                  (clickedTag === "全て" ||
                    review.find((res) => res === clickedTag)) && (
                    <Review
                      name={"ネコさん"}
                      previewTags={[
                        "潔癖症",
                        "一般体型",
                        "味音痴",
                        "コスパ重視",
                      ]}
                      reviewTags={[
                        "美味しい",
                        "量は少し多め",
                        "気に入った",
                        "コスパ最強",
                      ]}
                    />
                  )
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
