const loginModel = require('../model/loginModel');

//회원가입
exports.registerUser = async (req, res) => {
    try{
        await loginModel.registerUser(req,res);
        res.status(201).json({ message: '회원가입 성공!'  });
    } catch (err) {
        res.status(500).json({error:err.message});
    }
};

//로그인 시 id, pw 확인
exports.loginCheck = async (req, res) => {
  
    try{
        const products = await loginModel.loginCheck(req,res);
        if(products >= 1){
            res.status(201).json({ message: '로그인 성공!'  });
        } else{
            res.status(401).json({message : 'ID 또는 비밀번호가 일치하지 않습니다.'});
        }
    } catch (err) {
        res.status(500).json({error:err.message});
    }
        
};

//id 중복체크
exports.checkIdDup = async(req, res) => {
    
    try{
        const products = await loginModel.checkIdDup(req,res);
        if(products >=1){
            res.status(401).json({message : '중복 ID입니다.'});   
        } else{
            res.status(201).json({ message: '사용 가능 ID'  });
        }
    }catch (err) {
        res.status(500).json({err:err.message});
    }
        
};

