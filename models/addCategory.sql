USE [TradeMarket]
GO
/****** Object:  StoredProcedure [dbo].[addCategory]    Script Date: 2019/3/4 14:45:04 ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
ALTER PROCEDURE [dbo].[addCategory]
  @parentId int,
  @cateName varchar(30),
  @lowPrice int,
  @highPrice int
AS
begin
  declare @cateLevel int
  declare @levelNum int
  declare @lineNum int
  declare @addCateId int

  select @levelNum=levelNum
  from [ProductCategory]
  where ID = @parentId

  if ( @levelNum is NULL )
begin
    select -1 as ret
    return -1
  /*上一级分类不存在*/
  end
else
if ( @levelNum <> 1 and @levelNum <> 2 )
begin
    select -2 as ret
    return -2
  /*分类层级错误仅支持2级分类*/
  end

  --select @lineNum=count(*) from [ProductCategory] where parentId = @parentId
  select top 1
    @lineNum=ID
  from [ProductCategory]
  where parentId = @parentId
  order by ID desc
  if ( @lineNum is null )
 set @lineNum = 1
else
begin
    if ( @levelNum = 1 )
  set @lineNum = @lineNum % 100 +1
 else
  set @lineNum = @lineNum % 1000+1
  end

  if ( @levelNum = 1 )
 set @addCateId = @parentId * 100 + @lineNum
else
  set @addCateId = @parentId * 1000 + @lineNum

  insert into [ProductCategory]
    (ID,levelNum,parentId,name,lowprice,highprice,created)
  values
    (@addCateId, @levelNum+1, @parentId, @cateName, @lowPrice, @highPrice, getDate())
  if(@@error !=0)
begin
    select -3 as ret
    return -3
  /*添加错误*/
  end
else
begin
    select 0 as ret, @addCateId as nID
    return 0
  /*成功添加*/
  end

end
	
